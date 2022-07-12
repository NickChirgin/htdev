import React from "react";
import "./Form.css"
import fetch from "node-fetch";

async function getTimezone() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          })

          if (!response.ok){
            throw new Error(`Error! status: ${response.status}`)
          }

          const result = (await response.json())
          console.log('result is: ', JSON.stringify(result, null, 4));

            return JSON.stringify(result);
    }
    catch(error){
        if (error instanceof Error){
            return error.message
        }
        else{
            return 'An unexpecter error occurred'
        }
    }
}

const Form: React.FC = () => {
    let options: Array<string> = []

    
    getTimezone().then(value => options.push(value))
    console.log(options);
    

    return (
        <form action="" className="">
            <textarea name="text" id="text" cols={50} rows={10}placeholder="Введите текст записи"></textarea>
            <div className="form-footer">
                <textarea name="author" id="" cols={30} rows={2} placeholder="Автор"></textarea>
                <select name="" id="">
                    {options.map(timezone => <option>timezone</option>)}
                </select>
            </div>
            <button>

            </button>
        </form>
    )
}

export default Form