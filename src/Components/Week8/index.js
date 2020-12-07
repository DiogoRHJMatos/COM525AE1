import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";

const StyledModalWrapper = styled.div`
    animation: 0.1s ${keyframes({from: {opacity: 0}, to: {opacity: 1}})} linear;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1;
    background: rgb(153,153,153, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled.div`
    position:fixed;
    z-index: 2;
    width: 50vw;
    height: 50vh;
    background-color: #f9f9f9;
`;

const StyledModalHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem;
    font-size: 30px;
    cursor: pointer;
`;

const Modal = (props) => {

    const {show, onClose, children} = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <>
            {show && (<StyledModalWrapper onClick={onClose}>
                <StyledModal onClick={blockClick}>
                    <StyledModalHeader>
                        <span onClick={onClose}> X </span>
                    </StyledModalHeader>
                    {children}
                </StyledModal>
            </StyledModalWrapper>)}
        </>
    )

}

const Week8 = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    const handleClick = () => setShowModal(true);

    return (
    <>

        <button onClick={handleClick}>Click Me!</button>

        <Modal show={showModal} onClose={handleClose}>
            <h1>Hello There</h1>
            <h2>General Kenobi</h2>
        </Modal>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, voluptate, asperiores facilis distinctio ea quidem unde soluta fuga aliquam aspernatur sequi. Rerum asperiores quod similique rem omnis. Soluta, repellat quos?
        Molestiae, tempore, facere distinctio, quo aliquid vel eaque qui corrupti quia quam quasi laboriosam rem! Ipsum qui deserunt molestiae, placeat facere eligendi quam! In laborum quae officiis magni laboriosam id!
        Earum eum debitis quidem. Sunt recusandae at libero maiores natus qui quis facilis fuga dignissimos dolores ipsam sed reiciendis dolor veritatis eum reprehenderit sequi aspernatur velit pariatur non, quaerat impedit.
        Voluptate id consectetur adipisci incidunt animi quaerat quis numquam ea consequuntur magni itaque explicabo placeat dolorem repellendus hic aut quidem, illo vitae, dicta dolores cupiditate atque perspiciatis dolor aliquam! Dignissimos.
        Adipisci, quia tempora. Aut repellendus dolorem unde maiores obcaecati recusandae nobis ipsum alias. Id eius, amet atque magni expedita quidem nihil vero repellendus sunt aut quod iure doloremque possimus? Officia?
        Reiciendis inventore eum dolore, assumenda odio sint, ipsum dolorem pariatur est dolorum temporibus tempora vero necessitatibus sapiente delectus itaque quo? Eligendi distinctio dolor saepe ex voluptates aliquid eveniet molestias quaerat?
        Tempore dolorem ad nihil sequi! Deleniti facere voluptas architecto accusantium sunt obcaecati! Aperiam qui, porro delectus recusandae eius nam suscipit ratione dignissimos voluptatem quisquam reprehenderit tempora nihil esse non velit?
        Officiis, enim cupiditate numquam possimus quo quis ullam? Expedita omnis dolorum dolor architecto aspernatur temporibus? Pariatur temporibus animi harum optio assumenda culpa, odit reiciendis deleniti? Perferendis totam earum dignissimos beatae?
        Laboriosam inventore omnis perferendis dignissimos officia minus consequatur magni excepturi quisquam ullam dolorum porro provident, ab vero aspernatur in ipsa doloribus est, voluptatum id sint? Veritatis obcaecati deserunt modi explicabo.
        Nulla possimus commodi facilis nobis beatae temporibus fugit? Cumque impedit iure cum necessitatibus quos quod totam ut, expedita iusto officiis alias quae aperiam. Sed aperiam quae exercitationem reprehenderit ipsum odio?
        Fugit rem nostrum et placeat, debitis animi nobis corrupti facere expedita illo vitae. Quia, aut doloribus nesciunt rem possimus nihil quae, voluptates natus, suscipit perferendis deserunt porro magni veniam laboriosam?
        Velit laudantium nemo facilis quam quo aliquid, quidem rerum voluptatum, eligendi pariatur, unde autem vitae iure omnis suscipit rem provident optio praesentium. Obcaecati hic harum quaerat perferendis ipsam nemo est?
        Corporis quae fugit aut dolor voluptates, iusto aliquam delectus facilis molestiae impedit maiores nemo natus consequuntur dolorem doloremque vel blanditiis! Recusandae aspernatur quam hic ipsam a ex laborum architecto sequi?
        Aspernatur unde voluptatibus, quas quia itaque ea sunt laborum. Hic accusantium similique sequi natus numquam alias officiis tenetur dignissimos ipsum! Amet laborum id labore fugit praesentium sit incidunt ad ab.
        Accusantium rerum facilis tempora modi fugiat, voluptatibus labore ea nam culpa perspiciatis, repellendus itaque sint ratione iusto. Voluptate sunt culpa quam sed officia adipisci quod itaque vero, molestiae, possimus totam?
        Totam numquam similique ipsum doloribus esse nulla cumque beatae nesciunt officiis. Quos quisquam sint cum nemo animi alias fugiat deserunt voluptas, tempora eius nobis, odio repellat beatae minus ex placeat.
        Nulla soluta dolorum tenetur veritatis, aperiam ipsam, aliquam voluptatum blanditiis obcaecati quam expedita eos recusandae veniam officia dolore laborum. Iusto exercitationem ducimus eveniet itaque ut rem, animi corporis dicta cumque.
        Unde tenetur quo aperiam dolore id vero officiis ipsam, nam accusamus illo nisi sapiente ullam error atque cupiditate blanditiis veritatis, nemo alias quae reprehenderit fuga sed. A recusandae vel illum.
        Voluptate tempore deleniti in natus earum eaque sint placeat possimus. Aliquam numquam quaerat facere amet quos animi vel laudantium mollitia maiores molestiae eveniet pariatur neque natus, adipisci magni dolore incidunt!
        Impedit quia, quibusdam neque quae praesentium tempore? Iusto incidunt, unde saepe laboriosam dolor nulla non delectus officia, aspernatur voluptatibus magni ad maiores doloremque fuga ea voluptate officiis suscipit repudiandae at.
        Ad, tempora repellat eligendi et, provident numquam delectus facilis explicabo placeat illo officiis! Culpa minus, fugit libero beatae nesciunt et rem debitis, vel hic aliquam atque quasi aspernatur! Quis, ipsam?
        Accusamus officiis illum, dolore perspiciatis quam error consequuntur rerum sint sequi aliquid cumque obcaecati fugit, iste blanditiis explicabo, labore incidunt ex id provident eum sapiente. Architecto fuga magni maiores excepturi.
        Quis et qui sed labore deleniti. Doloremque, illum dolor. Nesciunt aliquid nihil eius tempore mollitia natus impedit est eum. Deleniti unde obcaecati quos aperiam esse quisquam in quae eligendi totam?
        Nemo sunt libero reprehenderit quo magni quas, illum incidunt, architecto quia natus eos eum officiis asperiores optio perspiciatis iure eius commodi possimus odio esse dolor quidem. Quibusdam itaque facilis expedita!
        Dicta, rem ratione optio culpa enim, ipsa excepturi deleniti quasi, inventore nulla nemo modi similique quos placeat voluptate molestias tempora qui? Reiciendis tempore dolorum earum maiores porro itaque, numquam reprehenderit.
        Dolor velit vero iusto voluptatibus distinctio minima expedita, inventore consequatur, earum incidunt eius quos totam debitis quasi laborum similique qui dicta dolore delectus fugiat voluptatum sit dolorem! Adipisci, eos culpa!
        Similique voluptas incidunt amet qui deserunt quis expedita dicta sapiente consequatur eligendi, tenetur sequi mollitia rerum asperiores distinctio quisquam corporis iusto cumque deleniti, impedit accusamus nesciunt quas quae! Accusantium, natus?
        Mollitia molestiae provident odio nulla, nihil explicabo consequatur laudantium dolore animi laborum doloribus ea, saepe, optio aut? Nam, numquam officia illo, architecto veritatis placeat necessitatibus corporis harum dolore consequatur nulla?
        Voluptatem nostrum doloremque voluptas magnam sed itaque sequi hic. Illo amet, alias consequatur veniam ad assumenda quae cum perferendis aperiam nisi id, laboriosam praesentium exercitationem maxime dolores, magni nam dolorum.
        Pariatur, quod magnam! Eveniet, nam. Deleniti ut, consequatur earum, reiciendis magni soluta consectetur doloremque ipsa enim culpa numquam. Nemo odio excepturi ab, tempora temporibus expedita fuga quae consectetur. Sunt, porro?
        Dolor culpa eligendi ea architecto accusantium aut minus perferendis est ex quos quam nulla distinctio eveniet nostrum, cupiditate, similique magni cumque corrupti odit asperiores sapiente quasi neque! Eaque, necessitatibus nihil?
        Enim maxime ullam nobis repudiandae quam rerum ex dolorum, sapiente molestiae velit illo obcaecati quas harum atque facere ab corporis voluptates sunt, quisquam eaque consequuntur corrupti, numquam neque. Reiciendis, ducimus.
        Facilis voluptatum hic labore suscipit. Voluptatibus labore dignissimos repellendus nam voluptate commodi deleniti quod, tenetur atque similique at reprehenderit rem beatae molestias impedit quidem magnam id excepturi. Quo, animi reprehenderit!
        At reprehenderit ipsum nesciunt commodi in eius a ullam, error impedit inventore dolore architecto vitae maiores nihil? Quos, ea laborum? Fugiat vero voluptas mollitia dicta soluta excepturi nesciunt asperiores tempora?
        Aut inventore soluta distinctio sed velit commodi temporibus rem quasi eius obcaecati a laudantium qui voluptatum perferendis excepturi omnis aliquid doloribus, expedita architecto accusantium iusto, magni necessitatibus similique? Laudantium, accusamus.
        Quod blanditiis iure eos vitae iusto ipsam. Eligendi cupiditate ad pariatur nisi praesentium animi perspiciatis iste molestias, temporibus et non quisquam corrupti eaque sunt! Eligendi vitae suscipit similique officiis dicta.
        Dicta magnam voluptatum, non deleniti, a voluptatem molestias recusandae, error nesciunt ratione harum odio voluptas eius facilis necessitatibus incidunt. Architecto soluta sed harum! Consectetur delectus nulla eligendi. Nihil, hic esse.
        Dolorum fugiat dolores facilis adipisci, dignissimos eaque sed. Quam nostrum aperiam cupiditate alias vitae possimus eaque iure facere ipsum, perspiciatis minus expedita fugit, sunt nihil ab accusamus quia, obcaecati porro?
        Illo quae nisi veritatis ut, ad facilis omnis laboriosam reiciendis ipsum accusamus aliquid nulla neque ex iusto. Blanditiis ipsa, quia dolore impedit optio omnis ex laboriosam ut eum obcaecati facilis?
        Dicta quidem praesentium illum nesciunt laudantium totam magnam, omnis odio cumque maiores sequi ut veritatis veniam nulla ipsum alias. Animi, distinctio nisi voluptate quam alias dolores nihil harum commodi voluptates.
        Nesciunt tenetur totam nobis atque quo vitae ratione quasi amet asperiores eaque sint modi neque veritatis exercitationem magnam libero minus, corrupti dolor iusto assumenda, corporis accusamus reiciendis voluptatum ullam! Dolore.
        Dignissimos, neque optio, ea eum architecto hic laudantium reiciendis voluptatum commodi rem fugit non officiis sunt aliquid. A soluta placeat hic ut dolorem aliquid. Iste veniam delectus nam similique facere.
        Nam ipsum suscipit necessitatibus animi, quasi architecto odio laborum consectetur aliquid, facere ipsa quibusdam praesentium exercitationem sit. Iusto est neque consequatur quis itaque, aut tempora eveniet! Natus dolore impedit iure!
        Ipsum possimus nostrum alias autem magni aspernatur laudantium excepturi voluptas soluta deleniti deserunt id aut, animi, delectus architecto corrupti reiciendis optio tenetur. Provident, voluptatibus! Deserunt praesentium repellat sint debitis accusantium.
        Totam, provident, qui laborum atque a, corrupti minus autem consectetur iusto tempore amet. Id cupiditate, fugit delectus sapiente iusto, explicabo quam nulla ipsa accusantium totam tenetur aspernatur ex placeat reprehenderit.
        Sint corporis enim beatae dignissimos ipsam optio, provident inventore adipisci voluptas et. Unde esse quisquam ab, tempora earum saepe quam laboriosam adipisci sunt ea iusto velit et quia labore dicta.
        Dolorum error voluptatum veritatis quod quas ipsa, quasi laborum ab ipsam quaerat, quia, rerum in beatae delectus! At, nobis laudantium mollitia cupiditate a inventore voluptate corporis ea corrupti, delectus fugit?
        Quisquam aperiam maiores tempore sequi officia ducimus sit, esse soluta incidunt laboriosam minus blanditiis dignissimos illo tenetur nulla reprehenderit odit cupiditate? Reiciendis dolorum doloremque eveniet possimus nostrum, cumque ullam alias.
        Qui totam dolore asperiores, obcaecati maiores ipsam. Ipsa corrupti doloribus placeat impedit mollitia corporis esse, dolorum, et suscipit repudiandae consectetur officia voluptate nesciunt eum ea neque? Deserunt vitae molestiae accusantium.
        Optio libero adipisci dolores culpa quasi, et perspiciatis inventore corrupti quis tenetur quaerat rerum omnis vero sed nulla earum, fugit, deleniti veritatis provident reiciendis minus. Ipsa, quas ipsum. Totam, amet?

        </>
    )
}

export default Week8;