import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NavbarOrganism } from '@brejcha13320/design-system-bootstrap';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería definir la configuración del navbar correctamente', () => {
    expect(component.navbarConfig).toEqual({
      title: 'Angular Client',
      iconConfig: {
        icon: 'bootstrap',
        size: 2
      },
      navLinks: [
        { text: 'Usuarios', url: '/users' },
        { text: 'Productos', url: '/products' }
      ]
    });
  });

  it('debería renderizar el componente NavbarOrganism', () => {
    const navbar = fixture.debugElement.query(By.directive(NavbarOrganism));
    expect(navbar).toBeTruthy();
  });

  it('debería pasar la configuración al NavbarOrganism', () => {
    const navbarComponent = fixture.debugElement
      .query(By.directive(NavbarOrganism))
      .componentInstance;
    expect(navbarComponent.navbarConfig).toEqual(component.navbarConfig);
  });

  it('debería contener un router-outlet en el template', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });

});
