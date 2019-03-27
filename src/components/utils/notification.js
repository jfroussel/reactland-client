import { notification } from 'antd'

/**
 * @param {*} type  // icon - info/success/warning/Error
 * @param {*} message 
 * @param {*} description 
 * @param {*} placement // top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
 */

const notify = (type, message, description, placement) => {
    notification[type]({
        message,
        description,
        placement,
        duration: 2
        
      });
}

export default notify