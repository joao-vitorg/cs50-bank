import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<Card>
				<CardHeader>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</CardHeader>
				<CardContent>
					<Button variant={"destructive"}>Apagar</Button>
				</CardContent>
			</Card>
		</div>
	);
}
