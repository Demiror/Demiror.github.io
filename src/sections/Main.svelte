<script>
    import { onMount } from "svelte";

    let startText = "We specialize in ";
    let text = "";

    function delay(ms) {
        return new Promise((resolve, reject) => setTimeout(resolve, ms));
    }

    onMount(() => {
        let idx = 0;
        let specializations = [
            "web development",
            "app creation",
            "graphic design",
            "photo editing",
            "video editing",
        ];

        const typewriter = async () => {
            while (true) {
                const specialization = specializations[idx];

                for (let letter of specialization) {
                    await delay(100);
                    text += letter;
                }

                await delay(4000);

                for (let letter in specialization) {
                    await delay(40);
                    text = text.slice(0, -1);
                }

                idx = (idx + 1) % specializations.length;
            }
        };

        delay(1100).then(typewriter);
    });
</script>

<style>
    .line {
        font-family: "Anonymous Pro", monospace;
        font-size: 2em;
        text-align: center;
    }

    /* Animation */
    .anim-typewriter {
        border-right: 2px solid rgba(255, 255, 255, 0.11);
        animation: blinkTextCursor 500ms infinite normal;
    }
    @keyframes blinkTextCursor {
        from {
            border-right-color: black;
        }
        to {
            border-right-color: transparent;
        }
    }
</style>

<div class="flex flex-col h-screen bg-blue-50">
    <div class="m-auto flex flex-col sm:flex-row">
        <p class="line sm:mr-4">{startText}</p>
        <p class="line m-auto"><span class="anim-typewriter">{text}</span></p>
    </div>
</div>
