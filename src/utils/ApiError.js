class ApiError extends Error
{
     constructor(
        statusCode,
        message="Somenthing went Wrong",
        erros=[],
        stack =""


    ){
          super(message)
          this.statusCode=statusCode
          this.data = null
          this.message=message
          this.success=false
          this.erros=erros



          if(stack){
            this.stack=stack
          }else{
            Error.captureStackTrace(this,this.constructor)
          }

      }
}

export{ApiError}