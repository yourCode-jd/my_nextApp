import Image from 'next/image';

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;

}
const Button = ({ type, title, variant, icon }: ButtonProps) => {
    return (
        <button className={`${variant} px-6 py-2 gap-2 rounded-full flex items-center w-max`} type={type} >
            {icon && <Image className="aspect-auto" src={icon} alt={title} width={15} height={15} />}
            <label className="text-black  font-medium text-sm uppercase">{title}</label>
        </button>
    )
}

export default Button