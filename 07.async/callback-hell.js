// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'mj' && password === 'dream') ||
                (id === 'you' && password === 'right')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
}

getRoles(user, onSuccess, onError) {
    setTimeout(() => {
        if (user === 'mj') {
            onSuccess({ name :'mj', role: 'admin'});
        } else {
            onError(new Error('no access'));
        }
    }, 1000);
}