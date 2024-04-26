class ApiError extends Error
{
     constructor(
        statusCode,
        message="Somenthing went Wrong",
        erros=[],
        statck =""


    ){
          super(message)
          this.statusCode=statusCode
          this.data = null
          this.message=message
          this.success=false
          this.erros=erros



          if(statck){
            this.stack=statck
          }else{
            Error.captureStackTrace(this,this.constructor)
          }

      }
}

export{ApiError}