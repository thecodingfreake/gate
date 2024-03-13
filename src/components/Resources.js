import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';


const Resources = () => {
    const videos = [
        { id: 'kVNk77u_-68', description: 'Demystifying the GATE Exam: A Comprehensive Guide' },
        { id: 'U1N6PDrChHE', description: 'Inside the GATE Exam: Everything You Need to Know' },
        { id: 'fEQd43lg9x8', description: 'Cracking the GATE Code: In-Depth Insights and Insights' },
        { id: 'rd37LFP88AM', description: 'GATE Triumph Unveiled: Top Secrets from AIR 1 & IISC Topper for GATE  Success' },
        { id: 'djrDcSvpmnA', description: 'GATE Success Blueprint: Proven Strategies from Topper @AjayDecodes' },
        { id: 'DL6kpkDfn58', description: 'GATE Exam Benefits: Landing Top Central Government Placements - Your Comprehensive Guide' }
    ];

    const videoStyle = {
        position: 'relative',
        paddingBottom: '56.25%',
        overflow: 'hidden',
        background: '#000',
        borderRadius: '8px',

    };

    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',

    };

    const descriptionStyle = {
        marginTop: '10px',
        fontFamily: 'montserrat',
        fontSize: '16px',
        fontWeight: '500',
        textAlign: 'center'
    };
    return (
        <div>
            <NavBar />

            <p style={{ marginTop: '40px', fontSize: '17px', fontWeight: '500', maxWidth: '1200px', textAlign: 'center', marginLeft: '150px', lineHeight: '25px', letterSpacing: '0.4px' }}>
                CIT-QUEST opens the doors to a world of knowledge and academic success.Discover a realm and elevate your learning journey with
                our curated resources, offering expert insights and a comprehensive study toolkit. Excellence awaits - dive in!</p>


            <div className="video-grid">
                {videos.map((video) => (
                    <div key={video.id}>
                        <div style={videoStyle}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                allowFullScreen
                                title={`YouTube Video ${video.id}`}
                                style={iframeStyle}
                            ></iframe>
                        </div>
                        <div style={descriptionStyle}>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>


    )
}

export default Resources