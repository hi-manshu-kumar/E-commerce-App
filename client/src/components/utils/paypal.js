import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component{
    render(){
        
        const onSuccess = (payment) => {
            this.props.onSuccess(payment);
            
            // {
            //     "paid":true,
            //     "cancelled":false,
            //     "payerID":"YU8TG4W2XH77G",
            //     "paymentID":"PAYID-LSLCZ4I2KT25754EL0643622",
            //     "paymentToken":"EC-6SX40898A57068713",
            //     "returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LSLCZ4I2KT25754EL0643622&token=EC-6SX40898A57068713&PayerID=YU8TG4W2XH77G",
            //     "address": {
            //         "recipient_name":"test buyer",
            //         "line1":"Flat no. 507 Wing A Raheja Residency",
            //         "line2":"Film City Road, Goregaon East",
            //         "city":"Mumbai",
            //         "state":"Maharashtra",
            //         "postal_code":"400097",
            //         "country_code":"IN"
            //     },
            //     "email":"himanshu.kumar394-buyer@gmail.com"
            // }

            console.log(JSON.stringify(payment))
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (err) => {
            console.log(JSON.stringify(err))
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox: 'AXfg90dJ1TEegNtIwlXxijim8P3NqTpx3STyg_7od-FDg80GqZXSS6ibm_9D3WM2tpnIeS4AR4NkeI8B',
            production: ''
        }
        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size: 'large',
                        color: 'blue',
                        shape: 'rect',
                        label: 'checkout'
                    }}
                />
            </div>
        );
    }
}

export default Paypal;