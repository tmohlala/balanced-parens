const parensAreBalanced = (input) => {
    const arrBalance = [];
    const strArr = input.split("");
    const open = ['{', '(', '['];

    for (let item of strArr) {
        if (open.includes(item)) {
            arrBalance.push(item);
        } else {
            let i;
            switch(item) {
                case '}':
                    i = arrBalance.lastIndexOf('{');
                    if (i === arrBalance.length - 1) {
                        arrBalance.splice(i, 1);
                    }

                    break;
                case ']':
                    i = arrBalance.lastIndexOf('[');
                    if (i === arrBalance.length - 1) {
                        arrBalance.splice(i, 1);
                    }
                    break;
                case ')':
                    i = arrBalance.lastIndexOf('(');
                    if (i === arrBalance.length - 1) {
                        arrBalance.splice(i, 1);
                    }
                    break;
            }

            if (i < 0) {
                return false;
            }
        }
    }


    return  !!!arrBalance.length;
}

module.exports = parensAreBalanced
