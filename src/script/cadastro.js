document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastro-form');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');
    const passwordError = document.getElementById('password-error');

    function validarSenhas() {
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        // Se o campo de confirmação de senha não estiver vazio e for diferente da senha
        if (confirmarSenha.length > 0 && senha !== confirmarSenha) {
            senhaInput.classList.add('input-error');
            confirmarSenhaInput.classList.add('input-error');
            passwordError.classList.add('active');
            return false;
        } else {
            senhaInput.classList.remove('input-error');
            confirmarSenhaInput.classList.remove('input-error');
            passwordError.classList.remove('active');
            return true;
        }
    }

    // Validação em tempo real ao digitar em ambos os campos de senha
    senhaInput.addEventListener('input', () => {
        if (confirmarSenhaInput.value.length > 0) {
            validarSenhas();
        }
    });

    confirmarSenhaInput.addEventListener('input', validarSenhas);

    // Validação no momento do envio do formulário
    if (form) {
        form.addEventListener('submit', (event) => {
            const ehValido = validarSenhas();
            if (!ehValido) {
                event.preventDefault();
                confirmarSenhaInput.focus();
            }
        });
    }
});
