import Breadcrumbs from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import React from "react";

const ShippingAndReturnsPage = () => {
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ href: "", label: "Shipping & Returns" }]} />

      <header>
        <h1 className="font-bold text-2xl">Shipping & Returns</h1>
      </header>

      <div className="space-y-4 mt-4">
        <h2 className="text-xl font-bold">Returns Policy</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sint
          ex earum, illo dolore ab consectetur doloribus enim, suscipit
          voluptatibus laboriosam magnam ea numquam officia? Animi vitae fugit
          nobis quia fuga ut repellat nulla accusamus facilis, odio dicta magni
          incidunt. Aliquam, amet culpa, commodi quae atque dolores consequatur
          numquam animi mollitia ullam voluptatem maiores harum? Vero veritatis
          quibusdam eos voluptas rerum iure illo voluptates numquam mollitia
          dolorem natus similique perferendis, incidunt quasi, nesciunt veniam
          non iste quam ab eius pariatur reprehenderit distinctio adipisci.
          Reprehenderit minus tempora illum voluptas quos? Obcaecati iste hic
          error suscipit distinctio libero consequuntur dignissimos, culpa ad.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum hic
          alias ab dolorum nemo atque, dolores nam inventore dignissimos veniam
          eligendi eius totam nobis a nostrum est sunt similique excepturi,
          consequatur repudiandae voluptates maiores deleniti expedita
          assumenda? Nam quos mollitia molestias omnis est, beatae nulla!
          Aliquid, labore. Quae aliquam sed quidem, veniam nemo fuga minima
          quisquam perspiciatis. Eligendi ea dolorem, cumque repudiandae ad
          molestiae deleniti quod ab, possimus tempore consectetur odio
          asperiores autem? Id modi, porro reprehenderit laudantium dolorum
          minima.
        </p>
      </div>

      <div className="space-y-4 mt-8">
        <h3 className="text-xl font-bold">Shipping</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          nobis deserunt eos in aut at sed placeat sapiente eum facere numquam
          id doloremque dolore, excepturi unde beatae rerum officiis accusantium
          illum! Sed iure tempora iusto quam adipisci veniam ipsam, officia
          nostrum ea vero placeat consequatur repudiandae porro illum enim
          magnam ab cumque magni obcaecati quibusdam? Animi ex, eveniet maiores
          laudantium voluptate tempore expedita illum dolor suscipit magni vel.
          Ipsam totam incidunt nihil minima ut cumque, placeat harum. Nemo,
          labore aspernatur deleniti impedit reiciendis enim natus facilis illo
          dicta doloribus pariatur non! Dolore facilis a, rem molestiae veniam
          soluta ducimus consequuntur dolor nesciunt vitae incidunt corporis
          pariatur eveniet rerum ut minima, illum dolores nostrum. Repellendus
          incidunt eligendi tenetur. Molestias voluptate illum nisi est officia
          nam vero consequuntur eum commodi, deserunt sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          architecto a repellat optio veritatis nihil explicabo, quaerat minus
          beatae impedit exercitationem perspiciatis non enim quam quibusdam
          odio ipsa ullam? Maxime dolores dolorem odit delectus excepturi,
          dolorum sunt voluptate tempora explicabo, repudiandae hic accusantium
          id sint. Quidem adipisci quasi repellendus fugiat.
        </p>
      </div>
    </Container>
  );
};

export default ShippingAndReturnsPage;
