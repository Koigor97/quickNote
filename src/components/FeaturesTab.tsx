
import {Feature, features} from "../../lib/featureDummyData.ts";
import CardWithGradient from "./CardWithGradient.tsx";


export default function FeaturesTab() {

    return (
        <div className="grid md:grid-cols-2 gap-4 mb-10">
        {features.map((feature : Feature): JSX.Element => (
            <CardWithGradient
                title={feature.title}
                description={feature.description}
                key={feature.id}
            />
            ))}
        </div>
    )
}
