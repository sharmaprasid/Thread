"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { usePathname, useRouter } from "next/navigation"
// import { updateUser } from "@/lib/actions/user.actions"
import { ThreadValidation } from "@/lib/validations/thread"


interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string
    },
    btnTitle: string
}








const PostThread = ({ userId }: { userId: string }) => {

    const pathname = usePathname();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
            thread: '',
            accountId: userId,
        }
    })
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-10">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex  flex-col gap-3 w-full">
                            <FormLabel className="text-base-semibold text-light-2">
                                Name
                            </FormLabel>
                            <FormControl >
                                <Input
                                    type="text"
                                    placeholder={field.name}
                                    className="account-form_input"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
            </form>
        </Form>
    )
}

export default PostThread