import { toast } from "sonner";

export const validate =(schema,value)=>{
    const result=schema.safeParse(value);

    if(!result.success){
        toast.error(result.error.issues[0].message)

        return false
    }

    return true
}