import { pool } from '../data/db.js';

/**
 * @function getAlumnos
 * @description extraer todos los módulos de un curso determinado
 * @param {*} req 
 * @param {*} res 
 */


export const getUsers = async (req, res) => {
 try {
   
   

    const [result] = await pool.query("SELECT * FROM users");
    console.log(result);
    res.status(200).json({data: result});
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al obtener usuarios ${ error.message }`});
  }
}

// export const getUsers = async (req, res) => {
//   try {
//     console.log(req.query.page);
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const offset = (page - 1) * limit; //desde que registro empieza
//     console.log(page, limit, offset);

//     const [countRows] = await pool.query("SELECT COUNT(*) AS total FROM users");

//     const [result] = await pool.query(
//       "SELECT id, name, email, role, active FROM users ORDER BY id LIMIT ? OFFSET ?",
//       [limit, offset]
//     );
//     console.log(result);
//     // Y agregar el array "data" directamente
//     const response = {
//       last_page: Math.ceil(countRows / limit),
//       last_row: countRows,
//       data: result
//     };
//     res.status(200).json(response);

//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }

// } 

// export const getUsers = async (req, res) => {
//   try {
        
//     // Parsear parámetros
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const offset = (page - 1) * limit;

//     // Obtener total de registros
   
//     const [countRows] = await pool.query("SELECT COUNT(*) AS total FROM users");
     
//     const total = countRows[0].total;
  
//     const lastPage = Math.ceil(total / limit);

    
//     // Obtener registros de la página actual
   
//     const [result] = await pool.query(
//       "SELECT id, name, email, role, active FROM users ORDER BY id LIMIT ? OFFSET ?",
//       [limit, offset]
//     );
    

//     // Construir respuesta
//     const response = {
//       last_page: lastPage,
//       last_row: total,
//       data: result
//     };

    

//     res.status(200).json(response);

//   } catch (e) {
//       res.status(500).json({ 
//       message: e.message,
//       error: e.toString()
//     });
//   }
// }



