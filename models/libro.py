# -*- coding: utf-8 -*-

from openerp.osv import fields, osv

class libro(osv.osv):
	_name = 'libro.libro'
	_rec_name = 'nombre'

	_columns={
    	'nombre': fields.char('Nombre', size=200, required=True, help="Escribe el Nombre de un libro Ejemplo: Algebra de Baldor"),
     	'autor': fields.char('Autor', size=200, required=True, help="Escribe el Nombre del Autor del Libro"),
     	'editorial': fields.char('Editorial', size=200, required=True, help="Escribe el Nombre de la Editorial"),
     	'precio': fields.float('Precio', size=15, required=True, help="Escribe el Precio del Libro"),
     	'fechapublicacion': fields.date('Fecha de Publicacion',required=True, help="Escribe la fecha en que se publico el Libro"),
     	'active': fields.boolean('Activo',help="Estado del Libro",default=True),
     }