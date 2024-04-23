import React from 'react';
import DOMPurify from 'dompurify';
import { Card, Row, Col } from 'react-bootstrap';
import './Music.css';

function Music() {
    const createSanitizedIframeHtml = (src, style, link) => {
        const sanitizedSrc = DOMPurify.sanitize(src);
        const sanitizedStyle = DOMPurify.sanitize(style);
        const sanitizedLink = DOMPurify.sanitize(link);

        return `
            <iframe
                style="${sanitizedStyle}"
                src="${sanitizedSrc}"
                seamless
            >
                ${sanitizedLink}
            </iframe>
        `;
    };

    const bandcampAlbums = [
        {
            src: "https://bandcamp.com/EmbeddedPlayer/album=4033009355/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/",
            style: "border: 0; width: 350px; height: 470px;",
            link: '<a href="https://basselmusic.bandcamp.com/album/alone-at-night">Alone At Night by Bassel &amp; The Supernaturals</a>'
        },
        {
            src: "https://bandcamp.com/EmbeddedPlayer/album=2615524121/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/",
            style: "border: 0; width: 350px; height: 470px;",
            link: '<a href="https://basselmusic.bandcamp.com/album/smoke-mirrors">Smoke &amp; Mirrors by Bassel &amp; The Supernaturals</a>'
        },
        {
            src: "https://bandcamp.com/EmbeddedPlayer/track=1866537782/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/",
            style: "border: 0; width: 350px; height: 442px;",
            link: '<a href="https://basselmusic.bandcamp.com/track/sandman">Sandman by Bassel &amp; The Supernaturals</a>'
        },
    ];

    const youtubeIframeSrc = "https://www.youtube.com/embed/0GdHxwoirNE?si=ombYmlE5zNikUsKb";
    const youtubeIframeStyle = "border: 0; width: 560px; height: 315px;";

    const sanitizedYoutubeIframeHtml = `
        <iframe
            style="${DOMPurify.sanitize(youtubeIframeStyle)}"
            src="${DOMPurify.sanitize(youtubeIframeSrc)}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    `;

    return (
        <>
            <Row>
                <Col>
                    <h1 className='title'>Music</h1>
                    <p className='sub-title'>Here you can find music that I've collaborated on, both as a performer and composer.</p>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                {bandcampAlbums.map((album, index) => (
                    <Card key={index} className="transparent-card">
                        <Card.Body className="transparent-card-body"
                            dangerouslySetInnerHTML={{
                                __html: createSanitizedIframeHtml(album.src, album.style, album.link),
                            }}
                        />
                    </Card>
                ))}
                <Card className="transparent-card">Placeholder</Card>
                <Card className="transparent-card">
                    <Card.Body className="transparent-card-body"
                        dangerouslySetInnerHTML={{
                            __html: sanitizedYoutubeIframeHtml,
                        }}
                    />
                </Card>
            </Row>
        </>
    );
}

export default Music;
