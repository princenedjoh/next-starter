import Image from "next/image";
import Button from "@components/button/button";
import { IoAddCircleOutline } from "react-icons/io5";
import OutlineButton from "@components/button/outlineButton";
import Text from "@styles/components/text";
import theme from "@styles/theme";

export default function Home() {
	return (
		<>
			<div className="p-4 flex items-center justify-center gap-6">
				<Button
					text="Button1"
					icon={<IoAddCircleOutline />}
					loading
					loadingColor="white"
				/>
				<Button
					text="Button2"
					icon={<IoAddCircleOutline />}
					loadingColor="white"
				/>
				<OutlineButton
					text="Button3"
					icon={<IoAddCircleOutline />}
				/>
				<OutlineButton
					text="Button4"
					icon={<IoAddCircleOutline />}
					loading
				/>
				<Text>Sample Text</Text>
				<Text
					size={theme.text.size.HL}
					bold={theme.text.bold.lg}
				>
					Sample Text
				</Text>
			</div>
		</>
	);
}
