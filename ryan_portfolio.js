 MicroModal.init({
            // This event fires when the modal is fully closed
            onClose: modal => {
                // 1. Target the iframe using its ID from Step 3
                const videoIframe = modal.querySelector('#modal-video-iframe');

                if (videoIframe) {
                    // 2. Get the current source URL
                    const currentSrc = videoIframe.src;
                    
                    // 3. Reset the source. This stops the video and reloads the player.
                    videoIframe.src = currentSrc;
                }
            },
            disableScroll: true // Prevents background page from scrolling
        });