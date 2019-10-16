import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  apiUrl = 'http://localhost:4000';

  async apiPost(url: string, model: object) {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model),
    });

    return response.json();
  }

  async apiGet(url: string) {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      redirect: 'follow',
      referrer: 'no-referrer'
    });

    return response.json();
  }

  async apiGetId(url: string) {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      redirect: 'follow',
      referrer: 'no-referrer'
    });
    return response.json();
  }

  async apiDelete(url: string) {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application.json'
      }
    });

    return response.json();
  }

  async apiPut(url: string, model: object) {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: 'PUT',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(model)
    });

    return response.json();
  }

  constructor() {
  }
}
