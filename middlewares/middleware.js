let verifyParams = (params) => {
    let verify = false;
    let errors = [];

    for (const property in params) {
        if (params[property] == "" || params[property] == null) {
            errors.push(`${property} is missing.`);
            verify = true;
        }
    }

    return { Verification: !verify, Errors: errors };
}

module.exports = {
    verifyParams
}