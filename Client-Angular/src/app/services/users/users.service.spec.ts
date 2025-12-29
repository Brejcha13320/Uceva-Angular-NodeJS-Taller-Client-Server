import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../../interfaces/users.interface';
import { USERS_MOCK } from '../../mocks/users.mocks';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllUsers', () => {

    it('debería realizar una petición GET y retornar una lista de usuarios', () => {
      const countUsers = 5;
      const mockUsers: User[] = USERS_MOCK;

      service.getAllUsers(countUsers).subscribe((usuarios) => {
        expect(usuarios).toEqual(mockUsers);
        expect(usuarios.length).toBe(mockUsers.length);
      });

      const req = httpMock.expectOne(`api/users/${countUsers}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockUsers);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countUsers = 3;

      service.getAllUsers(countUsers).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/users/${countUsers}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});
