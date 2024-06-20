import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  private apiUrl = 'http://127.0.0.1:8000/api/certificadoParticipante/';

  constructor(private http: HttpClient) {}

  // Otros métodos del servicio...

  buscarCertificados(filtro: string): Observable<any> {
    const url = `${this.apiUrl}${filtro}/`;
    return this.http.get<any>(url);
  }
  searchCertificado(id: string): Observable<any> {
    const url = `http://127.0.0.1:8000/api/certificadoValido/${id}/`;
    return this.http.get(url);
  }
  generarCertificado(urlCompleta: string, datosSolicitud: any): Observable<any> {
    console.log(urlCompleta)
    console.log(datosSolicitud)
    return this.http.post<any>(urlCompleta, datosSolicitud);
  }
}
