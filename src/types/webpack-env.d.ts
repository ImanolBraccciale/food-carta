declare module '*.png' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  // Permitir el uso de require.context
  declare function require(context: string): any;
  