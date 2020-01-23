/**
 * 格式化时长，与时间戳不同，时长仅代表时间长度。因此仅支持显示d/h/m/s/S
 * 注：如果没有前一个时间维度，则当前维度不会取余，比如如果没有d，则h可能会超过24，以此类推
 *
 * @export
 * @param {number} duration 时长，单位毫秒
 * @param {string} [format="d hh:mm:ss"] 格式，如"d hh:mm:ss.S"
 * @param {(type:string, value:number)=>string} [transform] 转换器，例如可以把阿拉伯数字转换成中文数字
 * @returns {string}
 */
export function formatDuration(duration, format="d hh:mm:ss.S", transform)
{
    const data = {
        date: Math.floor(duration / 86400000),
        hour: Math.floor(duration / 3600000),
        minute: Math.floor(duration / 60000),
        second: Math.floor(duration / 1000),
        millisecond: duration
    };
    if(format.indexOf("d") >= 0) data.hour %= 24;
    if(format.indexOf("h") >= 0) data.minute %= 60;
    if(format.indexOf("m") >= 0) data.second %= 60;
    if(format.indexOf("s") >= 0) data.millisecond %= 1000;
    return formatFromData(data, format, transform);
}

function formatFromData(data, format, transform)
{
    // 统一替换的不包含毫秒数
    const dict = {
        "y+": data.year,
        "q+": data.quarter,
        "M+": data.month,
        "d+": data.date,
        "D+": data.day,
        "h+": data.hour,
        "m+": data.minute,
        "s+": data.second
    };
    for(let key in dict)
    {
        let value = dict[key];
        // 负数不替换
        if(value >= 0)
        {
            const reg = new RegExp(`(${key})`, "g");
            if(reg.test(format))
            {
                // 如果有转换器，调用之
                if(transform)
                {
                    const newValue= transform(key, value);
                    if(newValue && newValue != null)
                    {
                        value = newValue;
                    }
                }
                // 如果是数字，要固定长度
                if(typeof value === "number")
                {
                    value = numToStr(value, RegExp.$1.length);
                }
                // 替换
                format = format.replace(reg, value);
            }
        }
    }
    // 替换毫秒数
    if(data.millisecond >= 0)
    {
        let value = data.millisecond;
        // 如果有转换器，调用之
        if(transform)
        {
            const newValue = transform("S+", value);
            if(newValue && newValue != null)
            {
                value = newValue;
            }
        }
        format = format.replace(/S+/g, value + "");
    }
    return format;
}

/**
 * 将数字变为指定长度的字符串，如果数字长度不够则在前方加0以填充长度，如果数字超长则使用原始长度
 *
 * @author Raykid
 * @date 2019-04-11
 * @export
 * @param {number} num 数字
 * @param {number} [len=1] 长度，默认是1
 * @param {number} [radix=10] 进制，默认为10
 * @returns {string}
 */
export function numToStr(num, len, radix)
{
    let numStr = num.toString(radix);
    // 如果长度不大于1，则该多长就多长
    if(len <= 1) return numStr;
    // 否则截短或者在前面补0
    const numLen = numStr.length;
    if(len <= numLen)
    {
        return numStr.substr(numLen - len);
    }
    else
    {
        for(let i = 0, lenI = len - numLen; i < lenI; i++)
        {
            numStr = "0" + numStr;
        }
        return numStr;
    }
}
