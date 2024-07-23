const validate = (payload, setInvalidFields) => {
    let invalids = 0
    let fields = Object.entries(payload)

    fields.forEach(item => {
        if (item[1] === '') {
            setInvalidFields(prev => [...prev, {
                name: item[0],
                message: 'Bạn phải nhập vào trường này'
            }])
            invalids++
        }
    })

    fields.forEach(item => {
        switch (item[0]) {
            case 'email':
                if (item[1].indexOf('@') === -1) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Email không hợp lệ'
                    }])
                    invalids++
                }
                break
            case 'phone':
                if (!+item[1]) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Số điện thoại phải là số'
                    }])
                    invalids++
                }
                if (item[1].length !== 10) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Số điện thoại phải có 10 chữ số'
                    }])
                    invalids++
                }
                if (!item[1].match(/^0/)) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Số điện thoại phải bắt đầu bằng số 0'
                    }])
                    invalids++
                }
                break
            case 'password':
                if (item[1].length < 8) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Mật khẩu phải có ít nhất 8 ký tự'
                    }])
                    invalids++
                }
                break
            case 'confirmPassword':
                if (item[1] !== payload.password) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Xác nhận mật khẩu không chính xác'
                    }])
                    invalids++
                }
                break
            case 'number':
            case 'price':
            case 'seat_capcity':
                if (+item[1] === 0) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Nhập giá trị cho trường này'
                    }])
                    invalids++
                }
                if (!+item[1]) {
                    setInvalidFields(prev => [...prev, {
                        name: item[0],
                        message: 'Bạn phải nhập số'
                    }])
                    invalids++
                }
                break
            default:
                break
        }
    })

    return invalids
}

export default validate
