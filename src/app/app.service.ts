import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private readonly http: HttpClient) { }

    getValue(): Observable<number> {
        return this.http.get<number>('/valores');
    }

    setValue(valorAtual: number): Observable<number> {
        return this.http.post<number>('/valores', valorAtual);
    }
}
