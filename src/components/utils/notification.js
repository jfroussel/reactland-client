import { notification } from 'antd'

/**
 * @param {*} type  // icon - info/success/warning/Error
 * @param {*} message 
 * @param {*} description 
 */

const notify = (type, message, description) => {
    notification[type]({
        message,
        description,
        duration: 2
        
      });
}

export default notify