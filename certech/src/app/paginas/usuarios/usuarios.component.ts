import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  participantes: any[] = [];
  participanteAEditar: any = {}; 
  filtroCedula: string = '';
  nuevoParticipante = {
    cedula: '',
    nombre_apellido: '',
    celular: '',
    correo: ''
  };
  
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  constructor(private router: Router, private userService: UserService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.cargarUsuarios()
    this.route.queryParams.subscribe(params => {
      const idEvento = params['idEvento'];
  
      if (idEvento) {
        this.cargarParticipantes(idEvento);
      } else {
        // Manejar el caso en que no se proporciona un idEvento en los parámetros de consulta
        console.error('No se proporcionó un idEvento en los parámetros de consulta.');
      }
    });
  }
  cargarUsuarios(): void {
    this.userService.obtenerUsuarios().subscribe(
      (usuarios: any[]) => {
        this.participantes = usuarios;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
   
  }

  filtrarCedula(): void {
    this.userService.obtenerparticipante().subscribe(
      (data) => {
        if (data && Array.isArray(data.participantes)) {
          this.participantes = data.participantes.filter((participante: any) => {
            // Asegúrate de que participante.cedula tiene un valor antes de llamar a toLowerCase()
            return participante.cedula && participante.cedula.toLowerCase().includes(this.filtroCedula.toLowerCase());
          });
        } else {
          console.error('Los datos no contienen un array de participantes:', data);
          // Manejar el caso donde los datos no son válidos, por ejemplo, mostrando un mensaje de error en la interfaz de usuario.
        }
      },
      (error) => {
        console.error('Error al obtener participantes:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje de error en la interfaz de usuario.
      }
    );
  }
  cargarParticipantes(idEvento :string): void {
   
    this.userService.getParticipantes(idEvento).subscribe(
      (response) => {
        if (response && response.participantes) {
          this.participantes = response.participantes;
          
        }
        
      },
      (error) => {
        console.error('Error al cargar participantes:', error);
        // Manejar errores aquí
      }
    );
  }

  mostrarEventos() {
    this.router.navigate(['/dashboard']);
  }

  mostrarValidacion() {
    this.router.navigate(['/validacion']);
  }

  mostrarFirmas() {
    this.router.navigate(['/firmas']);
  }

  mostrarTabla() {
    this.router.navigate(['/eventos/tabla']);
  }

  AgregarEstudiante() {
    this.router.navigate(['eventos/usuarios/formEstudiante']);
  }
  mostrarcertificados() {
    this.router.navigate(['eventos/seccionCertificados']);
  }
  editarParticipante(participante: string) {
    this.router.navigate(['eventos/usuarios/formEstudiante/', participante]);
  }
  eliminarParticipanteLocal(participante: any): void {
    this.userService.eliminarUsuario(participante)  
    this.eliminarParticipante(participante.id_participamte);
  }
  eliminarParticipante(id_participante: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este participante?');

    if (confirmacion) {
    this.userService.eliminarParticipante(id_participante).subscribe(
      (response) => {
        console.log('Participante eliminado:', response);
        // Volver a cargar la lista después de eliminar el participante
        this.cargarParticipantes(id_participante);
      },
      (error) => {
        console.error('Error al eliminar participante:', error);
        // Manejar errores aquí
      }
    );
  }else{
    // El usuario canceló la eliminación
    console.log('Eliminación cancelada por el usuario.');
  }
  // El usuario canceló la eliminación
  console.log('Eliminación cancelada por el usuario.');
}

  onFileSelected(event: any) {
    const archivo: File = event.target.files[0];

    if (archivo) {
      this.subirArchivo(archivo);
    }
  }
  subirArchivo(archivo: File) {;
    
    console.log(archivo)
    this.userService.subirArchivoExcel(archivo).subscribe(
      (response) => {
        console.log('Archivo subido correctamente:', response);
        
        this.userService.agregarArchivoSubido(response);
        console.log(response)
      },
      (error) => {
        console.error('Error al subir el archivo:', error);
        // Manejar errores aquí
      }
    );
  }
  
  importarArchivo() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click(); // Activa el input de tipo file
    }
  }
  
  
  descargarplantilla(): void{

    const rutaArchivo = '/assets/archivos/plantilla.xlsx'; // Ajusta la ruta según tu estructura

    // Crear un enlace temporal
    const enlaceDescarga = this.downloadLink.nativeElement;
    enlaceDescarga.href = rutaArchivo;
    enlaceDescarga.download = 'plantilla.xlsx'; // Nombre del archivo al descargar

    // Simular clic en el enlace para iniciar la descarga
    enlaceDescarga.click();
  }
  
}