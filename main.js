function ForLoop(event){

    {
        event.preventDefault()
    }

    let Value1 = document.getElementById('value1').value
        Value1 = Number(Value1)
    let Value2 = document.getElementById('value2').value
        Value2 = Number(Value2)
    let difference = document.getElementById('difference').value
        difference = Number(difference)
    let result = ""

    let br = document.getElementById('break')

        for (let i = Value1; i <= Value2; i += difference) {
            
            result += i + ", " + ""


        }

        document.getElementById('result').innerHTML = result
        // console.log(result)


    }
    function ForLoop(event){

        {
            event.preventDefault()
        }
    
        let Value1 = document.getElementById('value1').value
            Value1 = Number(Value1)
        let Value2 = document.getElementById('value2').value
            Value2 = Number(Value2)
        let difference = document.getElementById('difference').value
            difference = Number(difference)
        let result = ""
    
        let br = document.getElementById('break')
    
            for (let i = Value1; i <= Value2; i += difference) {
                
                result += i + ", " + ""
    
    
            }
    
            document.getElementById('result').innerHTML = result
    
    
        }
    