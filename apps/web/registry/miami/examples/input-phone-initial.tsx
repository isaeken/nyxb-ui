import * as React from "react"

import { InputPhone } from "~/registry/miami/ui/input-phone"

export default function InputPhoneInitial() {
   const [value, setValue] = React.useState("")

   return (
      <InputPhone
         value={value}
         onChange={setValue}
         initialValueFormat="national"
      />
   )
}
