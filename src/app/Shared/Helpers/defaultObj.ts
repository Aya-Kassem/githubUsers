export function createDefaultObject<T>(defaultValues: Partial<T>): T {
    return {
      ...defaultValues
    } as T;
  }
  