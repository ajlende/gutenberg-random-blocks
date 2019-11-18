export const randomItem = ( arr ) => arr[ Math.floor( Math.random() * arr.length ) ];

export const randomInt = ( min, max ) => Math.floor( Math.random() * ( Math.ceil( max ) - Math.floor( min ) ) ) + Math.floor( min );
