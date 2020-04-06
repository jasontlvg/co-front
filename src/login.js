const semantic= require('./scss/semantic/semantic.scss');
const semanticjs=require('./js/semantic');
const styles= require('./scss/login.scss');

$('.ui.form')
  .form({
    fields: {
        email: 'empty',
        password: 'empty',
    }
  })
;