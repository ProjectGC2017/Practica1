const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function (ev) {
	ev.preventDefault()

	const error = Math.random() > 0.5
	var el;
	if(error){
		el = $('<div>',{ html: 'Ha ocurrido un error'})
	} else{
		el = $('<div>',{ html: 'Te enviaremos todas las novedades'})
	}

	el.addClass('form-control-feedback')
	$formGroup.append(el)
})