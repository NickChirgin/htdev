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

            return result;
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
    // let options: Array<string> = []
    let options: Array<string> = []
    let test: Array<string> = []
    getTimezone()
    .then(value => {
        value.map((timezone: string) => options.push(timezone))
    })
    console.log(options);
    
    
    
  

    return (
        <form action="" className="">
            <textarea name="text" id="text" cols={50} rows={10}placeholder="Введите текст записи"></textarea>
            <div className="form-footer">
                <textarea name="author" id="" cols={30} rows={2} placeholder="Автор"></textarea>
                <select name="" id="">
                    <option value={options[3]}>{options[3]}</option>
                    <option>{options.length}</option>
                    <option>{}</option>
                    <option>{options[3]}</option>
                    <option>{options[3]}</option>
                </select>
            </div>
            <button>

            </button>
        </form>
    )
}

export default Form