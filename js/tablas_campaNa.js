$(document).ready(function() { 

var totalG = 0;
   
// sobres y papeletas
     $('#Gastos_01').CSVToTable('datos_02/gastos_01.tsv',{ 
         separator: '\t',
     	 tableClass: 'table'
         }
     ).bind("loadComplete",function() { 
     	$('#Gastos_01').find('TABLE').addClass('table tablesorter');
        $('#Gastos_01').find('TABLE').tablesorter();
         
         
         var G01 = 0;
         $("#Gastos_01 tbody tr td:last-child").each(function() {   
         	var este = parseFloat($(this).text()) ;
         	G01 += este;
          });
         
         $('p#tot_G01').text(G01);
         totalG += G01;
         
         $('p#tot_G01').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
         
         $('#Gastos_01 tbody tr td:last-child').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
         
     }); 
 
     
// alquiler de locales
$('#Gastos_02').CSVToTable('datos_02/gastos_02.tsv',{ 
    separator: '\t',
	tableClass: 'table'
    }
).bind("loadComplete",function() { 
	$('#Gastos_02').find('TABLE').addClass('table tablesorter');
    $('#Gastos_02').find('TABLE').tablesorter();
    
    // calculate total G02
    var G02 = 0;
    $("#Gastos_02 tbody tr td:last-child").each(function() {   
    	var este = parseFloat($(this).text()) ;
    	G02 += este;
    	//console.log(G02);
    });
    
    $('p#tot_G02').text(G02);
    totalG += G02;
    
    $('p#tot_G02').formatCurrency({
     	decimalSymbol: ',',
    	digitGroupSymbol: '.',
    	symbol: '€',
    	positiveFormat: '%n <span class="euro">%s</span>',
    });
    
    
    $('#Gastos_02 tbody tr td:last-child').formatCurrency({
     	decimalSymbol: ',',
    	digitGroupSymbol: '.',
    	symbol: '€',
    	positiveFormat: '%n <span class="euro">%s</span>',
    });
    
    
});  

// salarios
     $('#Gastos_03').CSVToTable('datos_02/gastos_03.tsv',{ 
         separator: '\t',
     	 tableClass: 'table'
         }
     ).bind("loadComplete",function() { 
     	$('#Gastos_03').find('TABLE').addClass('table tablesorter');
     	$('#Gastos_03').find('TABLE').tablesorter();
         
         
         var G03 = 0;
         $("#Gastos_03 tbody tr td:last-child").each(function() {   
         	var este = parseFloat($(this).text()) ;
         	G03 += este;
          });
         
         $('p#tot_G03').text(G03);
         totalG += G03;
         
         $('p#tot_G03').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });      
         
         $('#Gastos_03 tbody tr td:last-child').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
         
         
         
         
     }); 
     
 // servicios profesionales
      $('#Gastos_04').CSVToTable('datos_02/gastos_04.tsv',{ 
          separator: '\t',
      	 tableClass: 'table'
          }
      ).bind("loadComplete",function() { 
      	$('#Gastos_04').find('TABLE').addClass('table tablesorter');
      	$('#Gastos_04').find('TABLE').tablesorter();
          
          
          var G04 = 0;
          $("#Gastos_04 tbody tr td:last-child").each(function() {   
          	var este = parseFloat($(this).text()) ;
          	G04 += este;
           });
          
          $('p#tot_G04').text(G04);
          totalG += G04;
          
          $('p#tot_G04').formatCurrency({
           	decimalSymbol: ',',
          	digitGroupSymbol: '.',
          	symbol: '€',
          	positiveFormat: '%n <span class="euro">%s</span>',
          });      
          
          $('#Gastos_04 tbody tr td:last-child').formatCurrency({
           	decimalSymbol: ',',
          	digitGroupSymbol: '.',
          	symbol: '€',
          	positiveFormat: '%n <span class="euro">%s</span>',
          });
          
                    
      }); 
 

// material gráfico
     $('#Gastos_05').CSVToTable('datos_02/gastos_05.tsv',{ 
         separator: '\t',
     	 tableClass: 'table'
         }
     ).bind("loadComplete",function() { 
     	$('#Gastos_05').find('TABLE').addClass('table tablesorter');
     	$('#Gastos_05').find('TABLE').tablesorter();
         
         
         var G05 = 0;
         $("#Gastos_05 tbody tr td:last-child").each(function() {   
         	var este = parseFloat($(this).text()) ;
         	G05 += este;
          });
         
         $('p#tot_G05').text(G05);
         totalG += G05;
         
         $('p#tot_G05').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });      
         
         $('#Gastos_05 tbody tr td:last-child').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
                  
     }); 
     
     
     
     // actos
          $('#Gastos_06').CSVToTable('datos_02/gastos_06.tsv',{ 
              separator: '\t',
          	 tableClass: 'table'
              }
          ).bind("loadComplete",function() { 
          	$('#Gastos_06').find('TABLE').addClass('table tablesorter');
          	$('#Gastos_06').find('TABLE').tablesorter();
              
              
              var G06 = 0;
              $("#Gastos_06 tbody tr td:last-child").each(function() {   
              	var este = parseFloat($(this).text()) ;
              	G06 += este;
               });
              
              $('p#tot_G06').text(G06);
              totalG += G06;
              
              $('p#tot_G06').formatCurrency({
               	decimalSymbol: ',',
              	digitGroupSymbol: '.',
              	symbol: '€',
              	positiveFormat: '%n <span class="euro">%s</span>',
              });      
              
              $('#Gastos_06 tbody tr td:last-child').formatCurrency({
               	decimalSymbol: ',',
              	digitGroupSymbol: '.',
              	symbol: '€',
              	positiveFormat: '%n <span class="euro">%s</span>',
              });
              
              
                            
          }); 


// publicidad
     $('#Gastos_07').CSVToTable('datos_02/gastos_07.tsv',{ 
         separator: '\t',
     	 tableClass: 'table'
         }
     ).bind("loadComplete",function() { 
     	$('#Gastos_07').find('TABLE').addClass('table tablesorter');
     	$('#Gastos_07').find('TABLE').tablesorter();
         
         
         var G07 = 0;
         $("#Gastos_07 tbody tr td:last-child").each(function() {   
         	var este = parseFloat($(this).text()) ;
         	G07 += este;
          });
         
         $('p#tot_G07').text(G07);
         totalG += G07;
         
         $('p#tot_G07').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });      
         
         $('#Gastos_07 tbody tr td:last-child').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
         
                 
     }); 



// funcionamiento oficina
     $('#Gastos_08').CSVToTable('datos_02/gastos_08.tsv',{ 
         separator: '\t',
     	 tableClass: 'table'
         }
     ).bind("loadComplete",function() { 
     	$('#Gastos_08').find('TABLE').addClass('table tablesorter');
     	$('#Gastos_08').find('TABLE').tablesorter();
         
         
         var G08 = 0;
         $("#Gastos_08 tbody tr td:last-child").each(function() {   
         	var este = parseFloat($(this).text()) ;
         	G08 += este;
          });
         
         $('p#tot_G08').text(G08);
         totalG += G08;
         
         $('p#tot_G08').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });      
         
         $('#Gastos_08 tbody tr td:last-child').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
                  
     }); 



// impuestos y SS
     $('#Gastos_09').CSVToTable('datos_02/gastos_09.tsv',{ 
         separator: '\t',
     	 tableClass: 'table'
         }
     ).bind("loadComplete",function() { 
     	$('#Gastos_09').find('TABLE').addClass('table tablesorter');
     	$('#Gastos_09').find('TABLE').tablesorter();
         
         
         var G09 = 0;
         $("#Gastos_09 tbody tr td:last-child").each(function() {   
         	var este = parseFloat($(this).text()) ;
         	G09 += este;
          });
         
         $('p#tot_G09').text(G09);
         totalG += G09;
         
         $('p#tot_G09').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });      
         
         $('#Gastos_09 tbody tr td:last-child').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
         
         
         // total gastos
         $('h1.gastos').text(totalG);
         //console.log(totalG);
         $('h1.gastos').formatCurrency({
          	decimalSymbol: ',',
         	digitGroupSymbol: '.',
         	symbol: '€',
         	positiveFormat: '%n <span class="euro">%s</span>',
         });
         
     }); 

     
     
}); 