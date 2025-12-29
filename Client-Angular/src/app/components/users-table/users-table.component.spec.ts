import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { USERS_MOCK } from '../../mocks/users.mocks';
import { UsersTableComponent } from './users-table.component';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada usuario', () => {
    component.users = USERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.users.length);
  });

  it('debería mostrar los datos del usuario en cada columna', () => {
    component.users = USERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const user = component.users[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(user.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(user.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(user.lastName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(user.age));
      expect(columns[4].nativeElement.textContent.trim()).toBe(user.email);
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.engineeringMap['Sistemas']).toBe('success');
    expect(component.engineeringMap['Electronica']).toBe('primary');
    expect(component.engineeringMap['Biomedica']).toBe('warning');
    expect(component.engineeringMap['Industrial']).toBe('danger');
    expect(component.engineeringMap['Ambiental']).toBe('secondary');
  });
  
});
