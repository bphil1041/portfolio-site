import React from 'react';
import DOMPurify from 'dompurify';
import { Card, Row, Col } from 'react-bootstrap';
import './Music.css';

function Music() {
    const iframeSrc = "https://bandcamp.com/EmbeddedPlayer/track=1866537782/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/";
    const iframeStyle = "border: 0; width: 350px; height: 442px;";
    const trackLink = '<a href="https://basselmusic.bandcamp.com/track/sandman">Sandman by Bassel &amp; The Supernaturals</a>';

    // Sanitize each part of the iframe separately
    const sanitizedSrc = DOMPurify.sanitize(iframeSrc);
    const sanitizedStyle = DOMPurify.sanitize(iframeStyle);
    const sanitizedTrackLink = DOMPurify.sanitize(trackLink);

    // Create the sanitized iframe HTML
    const sanitizedIframeHtml = `
        <iframe
            style="${sanitizedStyle}"
            src="${sanitizedSrc}"
            seamless
        >
            ${sanitizedTrackLink}
        </iframe>
    `;

    // Second Bandcamp content
    const iframeSrc2 = "https://bandcamp.com/EmbeddedPlayer/album=4033009355/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/";
    const iframeStyle2 = "border: 0; width: 350px; height: 470px;";
    const albumLink = '<a href="https://basselmusic.bandcamp.com/album/alone-at-night">Alone At Night by Bassel &amp; The Supernaturals</a>';

    // Sanitize each part of the second iframe separately
    const sanitizedSrc2 = DOMPurify.sanitize(iframeSrc2);
    const sanitizedStyle2 = DOMPurify.sanitize(iframeStyle2);
    const sanitizedAlbumLink = DOMPurify.sanitize(albumLink);

    // Create the sanitized second iframe HTML
    const sanitizedIframeHtml2 = `
        <iframe
            style="${sanitizedStyle2}"
            src="${sanitizedSrc2}"
            seamless
        >
            ${sanitizedAlbumLink}
        </iframe>
    `;

    // Third Bandcamp content
    const iframeSrc3 = "https://bandcamp.com/EmbeddedPlayer/album=2615524121/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/";
    const iframeStyle3 = "border: 0; width: 350px; height: 470px;";
    const albumLink2 = '<a href="https://basselmusic.bandcamp.com/album/smoke-mirrors">Smoke &amp; Mirrors by Bassel &amp; The Supernaturals</a>';

    // Sanitize each part of the third iframe separately
    const sanitizedSrc3 = DOMPurify.sanitize(iframeSrc3);
    const sanitizedStyle3 = DOMPurify.sanitize(iframeStyle3);
    const sanitizedAlbumLink2 = DOMPurify.sanitize(albumLink2);

    // Create the sanitized third iframe HTML
    const sanitizedIframeHtml3 = `
        <iframe
            style="${sanitizedStyle3}"
            src="${sanitizedSrc3}"
            seamless
        >
            ${sanitizedAlbumLink2}
        </iframe>
    `;

    // YouTube video
    const youtubeIframeSrc = "https://www.youtube.com/embed/0GdHxwoirNE?si=ombYmlE5zNikUsKb";
    const youtubeIframeStyle = "border: 0; width: 560px; height: 315px;";

    // Sanitize YouTube iframe separately
    const sanitizedYoutubeSrc = DOMPurify.sanitize(youtubeIframeSrc);
    const sanitizedYoutubeStyle = DOMPurify.sanitize(youtubeIframeStyle);

    // Create the sanitized YouTube iframe HTML
    const sanitizedYoutubeIframeHtml = `
        <iframe
            style="${sanitizedYoutubeStyle}"
            src="${sanitizedYoutubeSrc}"
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
                    <h1 className='title'>Welcome to my music page!</h1>
                    <p className='sub-title'>Here you can find music that I've collaborated on, both as a performer and composer.</p>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Card className="transparent-card">
                    <Card.Body className="transparent-card-body"
                        dangerouslySetInnerHTML={{
                            __html: sanitizedIframeHtml,
                        }}
                    />
                </Card>
                <Card className="transparent-card">
                    <Card.Body className="transparent-card-body"
                        dangerouslySetInnerHTML={{
                            __html: sanitizedIframeHtml2,
                        }}
                    />
                </Card>
                <Card className="transparent-card">
                    <Card.Body className="transparent-card-body"
                        dangerouslySetInnerHTML={{
                            __html: sanitizedIframeHtml3,
                        }}
                    />
                </Card>
                <Card className="transparent-card"></Card>
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
