# -*- coding: utf-8 -*-
{
    'name': "Libreria",

    'summary': """
        Este es nuestro primer modulo en odoo8  con ayuda de nuestro profesor Felipe Villamizar
        en el Curso de Lenguaje II""",

    'description': """
        Este es nuestro Primer modulo de Odoo8 del Curso lenguaje II con el profesor Felipe Villamizar
    """,

    'author': "Javier Montesinos",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/openerp/addons/base/module/module_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'vistas/libro_view.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo.xml',
    ],
    'installable': True,
    'auto_install': False,
}
