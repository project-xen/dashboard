declare module "@vercel/postgres" {
  // Add relevant types for the module here
  export const db: {
    connect: () => Promise<{
      sql: (query: TemplateStringsArray, ...params: any[]) => Promise<any>;
    }>;
  };
}
