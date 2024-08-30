function determinant(m ) {
    // return the determinant of the matrix passed in

    if(m.length !== m[0].length || m.length === 0){
      return null
    } else if(m.length == 1 ) {
        return m[0][0]

    } else if (m.length == 2){
        return m[0][0]*m[1][1]-m[0][1]*m[1][0]
    } else {
        let result = 0;

        for (let j = 0; j < m.length ; j++)
        {   
            let mij= m.filter((row, i) => i !== 0)
            .map(row => row.filter((_, z) => z !== j))

            result = result + m[0][j]*Math.pow(-1,j+2)*determinant(mij)
        }
        return result
    }    
  };



  m1 = [ [4, 6], [3,8]];
  m5 = [[2,4,2],[3,1,1],[1,2,0]];
  console.log(determinant([[1]]));
  console.log(determinant(m1));
  console.log(determinant(m5));