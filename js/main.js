var laboratoria = [
{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }
];



    laboratoria.forEach(function(e){ document.write("<table>"+
                                                      "<div>"+
                                                        "<ul>"+
                                                          "<tr>"+
                                                            "<td><strong><li>Nombre: </td><td>"+e.nombre + "</td></li></strong>" +
                                                          "</tr>"+
                                                          "<tr>"+
                                                            "<td><strong><li>Apellido: </td><td>"+e.apellido + "</td></li></strong>" +
                                                          "</tr>"+
                                                          "<tr>"+
                                                            "<td><strong><li>Rol: </td><td>"+e.rol + "</td></li></strong>" +
                                                          "</tr>"+
                                                          "<tr>"+
                                                            "<td><strong><li>Apellido: </td><td>"+e.cumpleanios + "</td></li></strong>" +
                                                          "</tr>"+
                                                        "</ul>"+
                                                      "</div>"+
                                                    "</table>");
});
