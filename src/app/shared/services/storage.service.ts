import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  private static store: Storage = window.localStorage;

  /**
   * Stores a value by key in local storage
   *
   * @param key Key of the entry
   * @param value Value of the entry
   */
  set<T>(key: string, value: T): T {
    const serializedData = JSON.stringify(value);
    LocalStorageService.store.setItem(key, serializedData);
    return value;
  }

  /**
   * Retrieve an entry by key out of local storage
   *
   * @param key Key of the entry
   */
  get<T = any>(key: string): T {
    const serializedData = LocalStorageService.store.getItem(key);
    return JSON.parse(serializedData);
  }

  /**
   * Removes the entry identified by the given key from local storage
   *
   * @param key Key of the entry
   */
  delete(key: string): void {
    LocalStorageService.store.removeItem(key);
  }
}
