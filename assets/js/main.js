$(function () {

    $('#form').bind('submit', function (event) {
        event.preventDefault();

        const txt = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: txt,
            dataType: 'json',
            success: function (json) {
                if (!json.status) {
                    alert("Login/Senha estão incorretos");
                } else {
                    alert("Bem vindo ao sistema");
                }
            },
        });
    });

});