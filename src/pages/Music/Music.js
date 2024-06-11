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
            style: "border: 0; width: auto; height: 500px;",
            link: '<a href="https://basselmusic.bandcamp.com/album/alone-at-night">Alone At Night by Bassel &amp; The Supernaturals</a>'
        },
        {
            src: "https://bandcamp.com/EmbeddedPlayer/album=2615524121/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/",
            style: "border: 0; width: auto; height: 500px;",
            link: '<a href="https://basselmusic.bandcamp.com/album/smoke-mirrors">Smoke &amp; Mirrors by Bassel &amp; The Supernaturals</a>'
        },
        {
            src: "https://bandcamp.com/EmbeddedPlayer/track=1866537782/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/",
            style: "border: 0; width: auto; height: 500px;",
            link: '<a href="https://basselmusic.bandcamp.com/track/sandman">Sandman by Bassel &amp; The Supernaturals</a>'
        },
    ];

    const youtubeIframeSrc1 = "https://www.youtube.com/embed/0GdHxwoirNE?si=ombYmlE5zNikUsKb";
    const youtubeIframeSrc2 = "https://www.youtube.com/embed/c8Obw0OTEUY";

    const createYoutubeIframeHtml = (src) => {
        const sanitizedSrc = DOMPurify.sanitize(src);
        return `
            <iframe
                class="youtube-iframe"
                src="${sanitizedSrc}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        `;
    };

    const sanitizedYoutubeIframeHtml1 = createYoutubeIframeHtml(youtubeIframeSrc1);
    const sanitizedYoutubeIframeHtml2 = createYoutubeIframeHtml(youtubeIframeSrc2);

    return (
        <div className="music-container">
            <Row className='text-content'>
                <Col>
                    <h1 className='title'>Music</h1>
                    <p className='sub-title'>Here you can find music that I've collaborated on, both as a performer and composer.</p>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                {bandcampAlbums.map((album, index) => (
                    <Col key={index}>
                        <Card className="transparent-card">
                            <Card.Body className="transparent-card-body"
                                dangerouslySetInnerHTML={{
                                    __html: createSanitizedIframeHtml(album.src, album.style, album.link),
                                }}
                            />
                        </Card>
                    </Col>
                ))}
                <Col>
                    <Card className="transparent-card">
                        <Card.Body className="transparent-card-body youtube"
                            dangerouslySetInnerHTML={{
                                __html: sanitizedYoutubeIframeHtml1,
                            }}
                        />
                    </Card>
                </Col>
                <Col>
                    <Card className="transparent-card">
                        <Card.Body className="transparent-card-body youtube"
                            dangerouslySetInnerHTML={{
                                __html: sanitizedYoutubeIframeHtml2,
                            }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Music;
