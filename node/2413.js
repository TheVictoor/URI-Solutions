var input = require( 'fs' ).readFileSync( '/dev/stdin', 'utf8' );
var lines = input.split( '\n' );

let valor1 = parseInt( lines.shift() );

console.log( valor1 * 4 );