import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPage } from './users.page';
import { provideHttpClient } from '@angular/common/http';
import { UsersService } from '../../services/users/users.service';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { of, throwError } from 'rxjs';
import { USERS_MOCK } from '../../mocks/users.mocks';
import { By } from '@angular/platform-browser';

describe('UsersPage', () => {
  let component: UsersPage;
  let fixture: ComponentFixture<UsersPage>;
  let usersService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPage, UsersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPage);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllUsers al iniciar', () => {
    const spyGetAllUsers = jest.spyOn(usersService, 'getAllUsers').mockReturnValue(of(USERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllUsers).toHaveBeenCalled();
  });

  it('debería asignar los productos recibidos del servicio', () => {
    jest.spyOn(usersService, 'getAllUsers').mockReturnValue(of(USERS_MOCK));
    fixture.detectChanges();
    expect(component.users).toEqual(USERS_MOCK);
  });

  it('debería pasar los productos al componente users-table', () => {
    jest.spyOn(usersService, 'getAllUsers').mockReturnValue(of(USERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(UsersTableComponent))
      .componentInstance;
    expect(tableComponent.users).toEqual(USERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllUsers', () => {
    component.users = [];
    const errorResponse = new Error('Error al cargar productos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(usersService, 'getAllUsers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(usersService.getAllUsers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.users.length).toBe(0);
  });
});
