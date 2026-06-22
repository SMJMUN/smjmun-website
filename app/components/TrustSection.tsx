'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useEffect, useRef } from 'react';

const partners = [
  {
    name: 'Delhi Public School',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAilBMVEVHcExrilsWVBSirIbMyqkAAADJx6dOekSpso23u5jCwqB5kmaMnnYAGgCWpH2QoXl8lGns38Lv4cb59/Dy5cu6vJj18OT////n27727NnX4dfSzq6ir4ne1riguKKzxrTY0rOSpHrL18rTl1SEm25ylW+Nqo9Ac0Dr7OG3diD1fhbj4csNVw3ihS2ll+alAAAAEXRSTlMAWyuY/g7sRq/O32d/GouSgH02sB8AAAF/SURBVCiRdZLnduIwEIUdsDEmkN0p6rbcWyDv/3qRCZhswt5fOvrOtDsTRQ8l+91L9B+9VYiQbZ6hNEYIwuLPE7hluAoPT+Aeb3D3A7wk0aYCJinJAPwNNZJHkxBnFRjqve+9Qn3IdHxvO12SGWnVZEBKRZIR0J1u9GBkM/QlgWgFq7JvJsn7tRc5eGsZ27b9aPFsm5D7dZ3CkIlrPH+8B52LDiRhukaGmgFyO7/PLRe1RtCrURkLp7sKi3meNYsaRQVr5I6FQFFrHseRqy7GvHrUdBigzrs4HzvRLU/H2xvb6AUCiFpc4tqFgrnD+ygpoMivCzl7szhcBHj4Dq+f1pLCL7hbIdBiOGhbWqVA00Rwh0kF5OWyLtlMpAzaQUK2zonGDwvFi56IqLeIxztMNdBQSsD80hmlfEjj1oVGWwRqlGE3CqMGT6BXD77clUrZpplCRwb0MfquYxGoLX1ZEqP7eb2bTIdzMMxQ7JPol9KsCEfttqffaNHpLfs34ScobyhFKlHB/gAAAABJRU5ErkJggg==',
  },
  {
    name: 'The Heritage School',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA6lBMVEVHcEwlP3G5ytze4Mm4wMW+yc15jqne38jT18+yvss5ZqDN1dTp6+PV2svm6uC4wr3a39bX4+mpt8nEy8qks7xSa5Wxvsvo8++El7I+PoxlZHpfXnoyM5CQjFUlJpuUkkx0cnJLS4geIKGAf15jYVx2dGGLiFR8eVedm0iHhFsDBLR4d21dXISXlFlmZWxUU3nj5MZsanAOEqWgnGFKSHhXVoGlo0RpaIfPyyF8e26sqjyyq2fSz5vb27Jva2HIxCXV1L/Kx45bWWzMxaZ1cE3u7sW/vIxISJrs6wuzsznY1xb9/QLBvjC8t27MvL0LAAAAGXRSTlMABQnrVzoj/rgsB4fR1LykoUwWeI8UuJlM0Unz6wAAAjNJREFUKJFtkud24jAQhQ2Y2KYnpEnuvfdusA2G0JK8/+tE7Nldsic7R/8+zZ2R7sWwW/VGoz723xpR+Pz5ebG8p35eGI6nRL3Z7TbEdHH/9A+6W07q7UprGk91V+vBy903RpFvB7ZLEg+Axk/28Xoy/Mtep2+x4oc25KUwEx26228n1B9N8o1VoqMLaVOXBQgZ11O2s4df7GmO+iAjpbJpe6HJ07bI0fv1y+gKceKgACP1bCilEW2BUk7lknEH99f3PQdslzuyzKS06cgQSFCwHUfZLpDw3WatCCatcWIoqLQq0L4VCmWuxAO08WuwShxad0TbDkGSQiEUJQ06QK+XGPZIsCpk+AhAVbQKTtRTJgpDW1C28xGCeqPLGseatMS8y5yueRzgVdVbkX0E95zF8NYxh5x1MiV4BBIjc1y3mvWx8UZnOEZLT++XKhdztzidBGBHnP+JOnGCBVxUmTzPny9xW2S8ocWoGc3sYRTaNoIfZyPLXPaDZw3DyC5ixOn1Yw/rT3d795xdsqot2rYtirZqz0bpxwSOvmhMsCFUczTQ+3gvVNrJXJU39cP0aupwcOgALx7Z1LIqy5LKXBAsxg2WvWusxsgVoZAZ29BFj2Wd0uCBVpNPv/0MWN/TKigZrKAdYUVL2i0L1CxwO6YsRUPjDTmSEnM9wG/RmwUHswPA99FJ1FU9uTGkPCbqz1hvmkZ1P9cBSWHfazRcDAIU291mQ5D4w4/EP+BzcrYYf0/8F70nWspfO/Y1AAAAAElFTkSuQmCC',
  },
  {
    name: 'Amity University',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEVHcEwROV4LNl8LMl8ROV8MN14DI2U3S1YLLHcDLGMHLGJKVlAAFGonQlkHIWYHK2IBJWT/zAAOOF//0wADMl4dQ2z4yQP/zwAAKFzv7d5iepP9/v0zUnOlkzF4jqP1ySVfZ0NRbYntxQqLna9qg5pDYH7tyELEqx2PhTnxygV2dj7UtBq2oS3lzn3n1Znw8/eYqrvl3LzSv3KyvsqCfDMmQFRMt9eCAAAAEXRSTlMA1Eey+ewq+gNDev0M5BaNXL9NCmgAAAHfSURBVDiNfZOJkqowEEVFBBQGkSQQIIR9k1VR///XXtiEGWfehaKK2yfdaejsdpPO4kXmhcMoXt6LX7utjnuNEwAwADImAYPjT8clLGosiNyH9XDAI7x5w+W5CAjyeQI4wITCm+vE6c2IrdhFj8QaTOG0AkYSJ27sxSNgeQ4aTLACKHVYOE3j0ENxugCH/QZIk9BxUoc9QidxEhetgDACYegxxAtvTpKErrfJcByrHVzDGG53bBMZlmUhtAUAAoh5SlDQOs+rPK9pEXwH0Cuoq8jEGOJBEMOrdHoDyFLqCELcNPoqcwWQlLNFzGu76DfAKq9wtKKOtL8AiEI8Or5tN7b5AVgFnI17l2W2/wFI19nw7Uxv/wdkd5MVMfWlyNKmsgB6r7dsk332VwbdZF1k5t1/A9PPUtfWG2KzKjOAI1UcAb7CC3BnFbJuLoErfho5mcJ3G6TRfTJ/bky1eWiVTQY7a0n/HA2siPNY8/WSoiGkI6QOBgDW/DL3Z6GaCFz0NrH7V8leYa6e3wfnJOXj38D0VRZlgCgbh1wVd6tEvoiGJLCQyrIIKLw+uW2cfS1ZpREbiSgonywDlS7fD+ewEU2ibKZyEATgoIk/w4O+ZK6sYCBx8sfqN3LhFP5H8n/vUEWstXsKAAAAAABJRU5ErkJggg==',
  },
  {
    name: 'Oakridge International',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAwFBMVEUDAwFHcExpKHpxKYNEydVEw89Dw89wKYNkJ3MvwNVDw88zzNVxKYQgHCAhHB1Dw8/+zAT/zAdvJ4FxKYMgHh1Ew889xtX/zQT7yQg3i5NExdFExNBtKH4YGRsUAA00h5CWfBYhHR9+LJN2AHAhHR0iHh8hHR8bFhclHx1wKYMdGh4iHh8eHRwfHh0lGychHh5wKYJEw89AuMMhHh4qnKshHR84MEgiHiD/6wD/1QT2xwghHR8iHh/rvwoiHiAiHyD1mr6uAAAAP3RSTlMBAJtyRKs73MoV/wcsMU7nOmlX/mHQi6X/qshS/yFeqRpyEx5Hu4UPOTptl3dcBX6/z3JnJlZ8whpQgxen0OWq5bb2AAABc0lEQVR4AY2PhXYjIRRAufXSEqXeCFnCECFGozPN/v9XrcwJ69v24lzkPfFx4O+tsgPB0TH/kHByegbnFwhKfr3IpZTyimtV4UxWL2t1RCLJRrOpuZHy9u6eZAB4eHyi0XxutW+l7NA1yXJ93tMCBJ+wfZ7OcJn3HOTguTekB1cn0BoBjMXPq8FmR80jqvIWnIFJY2qzdNU7Zs0Zc7kAqyKNZiNaUkAjOBLw0obJUllWxMDBsYYAbNoTiAwnmlb5KbeymlmDUtTut0OIYAKTaSmllAvvPRqx88uMMME7vCvlo5QvFcwkAmMMvgUjdCglJysCTDWCvFLJM4sa/QwoiwEoPAKDYUnMikqe8mz1EVBMYBIreSC2hkMEpbt7VQ6oOAXLzNiQxzXp4u4VZxREP55glnY4LHLEAXBeKVOp5Git3L5w8bsj2djPySpFWC73n/faI36FybgIlWURRoXVJJeAPEatR24J4m848PMz8RH41/AVMM4oAzbYwXcAAAAASUVORK5CYII=',
  },
  {
    name: 'JBCN',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAAAn1BMVEX////j5OTV1dbR0tPS09PNzs/x8fF/gYOPkZOdn6Cnq6ejpaSEhoiys7RzdXj8+v6UgK/LwtjDxMWIiox6fH7e2eWfkLVUMIFOJX1xV5TBt9D18vj6+vpQKX5sUZFbOoVZN4RkRouWmJmYhrHt6vLVz9+xpMS6vbu3rMiIdaXd3t6pm72Ca6Hm4u3v8O5DD3Y9AHO2qcidk67EwMuhj7rsWLvRAAABoUlEQVR4AYzRh2KbMAAE0BObSiK1JDOFIcJTzk7+/9vKkrvbPDZ3TOETiOf4wThNwjCCEyfp6gt1e4xjFWWuefd1g5WQWHkKs21eFGVVN3ORZBoLTut2V+2Ksui6rm/LrqruW50RLIwYir7vO6cflXsWYqHIzmU37YFyzHRG2uWqoh0V835xPKWYkWxfTmF5n9eHzfkyF4ohkJhZth3jYncAoAHcXcu+6x+swiw0h7ZrB8ASqU5CcP04vmn1lGEm0kNbXODzVDEWj5T3WPa7W0wPZQ+qYuZEOJeVvsWPz3Wg2HcJ0D+4ODTNS6PiVLo0TiJchyeFmZWoYCk3LqWIyOFsEzdgeLWR9WK2Pl35BI9bQbFQTw1VyiScp3Mls0CDVGBBBfh4Viozbj3DtMYoe4L7bQjHOOFAxBElRNstfAmH+WT6I2b5qxaRrcECODaGYczVQ4++IZT4jvJIxRwr8l5r9+SFDL2Melg8foCF+JFmwm74sns86ljgF8ZEm/z6eh2GxyDz8RuhThr7O5AkifAHmitKQik9/I2fcoJvox4AAJIRKSwHcbBmAAAAAElFTkSuQmCC',
  },
  {
    name: 'Pathways',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABg1BMVEVHcEzc5OnCyNLAlZa2vsvp5uj29PXQ1eCYutdsfJjo3t3k4OGAmavm5uf28e9MkL44hrc8jcFBl8Tc4ern4eK9zt1Gi76ostHDmZqYu9j08fHi5ukicqDJ1Nf17eva1diOtcvXraZehrNUZ4pno8tAk8Hs6+vcmYbelHL18/Lz8fBhos0/fKqzwch4eZ6YgqWpv9e2ytIVcZiKrtEAR3EddZ7ekVnBZjp+RzrZiEl4UEq3cVixxNvn4uSxx9upxNm5y9zb2uLs5uegv9rh3+XB0N7h3eG7xdfDy9l4rNPh19epus9MlcRpg5xrlazLz9xeipiWtNRViqCdtMDbz8xndIru6emJtdZGgpdFi7h5m7SIqM1HUGHy7+7Y195WjqifqrKKrtNym6lYoMo1NkFfkKSBpMw3d4ZWg49noclomcd4ocCJprdGianPy9NOdJdRWm5rZ3HbvKzYxLvKk3qUbl2bsNOCnq51pc5ijLN+kKIyQlcvg5NTfoiRh5NrVlG0nI/rdG14AAAAPHRSTlMAE/4T/nUE/v4E+kYJ4RaW2A6+DJqZNj7gbJw0FPwd4+Ca9vqYY5wzZ9O/3HTkmHXhndebCr6Y09O9vZkabVFGAAACRUlEQVQokW3SZ1fiUBAG4ACBhKYguPZdu27vHdJJgoEUAiH0LihNmtj1p++N7Krr8f36nJk7Z+5A0H3sruXlL3boifjmFj7PeD593VxY8j0im3P2g9Jst1MVFHH7nbaHNmV9gTYLbbGp4CGSZNxW0709X1xpFdqpZknBMCKEICQye6dTi+ZxLFZoHh8rOIZhIRDin9qssNzQ9bRwrNBYAAe1BE6jC5OxnW/ly0ZdNHNCgAvQOFACo9HVOcNMH8uNRkMWSInjeC4AXiUIHEWTm16AS6sXek0eM0xekniex3BQjKPJ8OtnAK3qxUWtpmpBEkEkCXSk0WQyGQ5XtsA422qsJhZUiiHzgEOEkM6EQQ4q03bI94qrieVyi2VYkswjoZDQi56gdKkSmXFBppdMK1YQ02qQBSbxRCtbTdCEAtALMLdSBo1lGKjEw+hZtZoNK6WDiMcL2uaA1vWYaGYYhBfoTPb8NIwqJ0Zb22JOy+WLsq7HYIbhOe6smt0vlU4OImAgyKppGhU0F+U6WESHgxPZo/3MYSSV2jKW4NYoigqyfPGyrnIwHD2aoMdYgmkbYJChKLajno3T6dvK/cPItPd28W4qaIRl2bxZ6J6fV6OZw0mh8WUO1mHoXpztmAWxu9GNnq6/+XtpU36HY89IPN6Bi4nuaTq6Pr18dyZ+hyHx+GBQvEr0EomNd5b/DmzQ7/cH/ZvedW90Nf/+gYF7dq7ND4fD0fVoNJxfm3t82Zad3d+/fnz/+W13xwI9EbvLYnE9LPoDmBeZx+4sD6gAAAAASUVORK5CYII=',
  },
  {
    name: 'Ryan International',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAALVBMVEVHcEwdOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo8dOo9aA6NpAAAAD3RSTlMAhtUwdP8MwULnHlOar2Knbun4AAABHklEQVR4AT3HgWdUARzA8c95vbe7t9s8AQoKA5KDUSgHS4Cn7dfdtZaHHIDBgciRA8jICeDBgFA4ARxkwIwMcESSsT9ix2Mf8P1q3H3oVlLYO9DqAdmkNBtKBxUwP3D62t5IIx1JS/MSjOXR6zxIojbGpLZYbl10h/IB7TjUKltF2reIqTsRhY+b3//rRvRpXw5sJfWFnaMpuHqTV1m1+5jGtynte2B1v6aR/FjZifh6XpFdr+vVeh+9rCH7fLbeT9AjgSeQn1VY9YD382JzXP1pjV7Azxh6lkx/m8UHujGq7W/3T6tsHkviWOeku+yc2AhcM+lvHG8POAet0ClFobE4kpYuD4Eshnb3zaICnpb+vZN+oVH79VbOred/gRuLvkkqcXuE7QAAAABJRU5ErkJggg==',
  },
  {
    name: 'Sanskriti School',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABPlBMVEX////78u3p2dJGLEBTMD3ey8P26+Seg38ZATY/LEsAIlUnCDTDtLIvACRWOUWggHmpk5CmioR9VFAXHEpZNEmINz2Edz0AFlgpDzd3U1JhPELVyMQqFz4AHFUAFFEAEk4AGlQAIVbqWxP8qwLAoikADVgVEUHu39gOCT8AGlYAAFuwTTD/ZADzxwEhDzv//vk2FDNlY0P0cw3/tQAAHlcZJVJuO0O/UCvfXRv/ZwDMqyI0KE4qJE9LOlF9P0BhNEGlkCUcL0mWhov/2gCwfCZSQUVYTUaRgDSXhSwZL1EDAkP///1OJDInP1K5lStLOkp2ZzsAE1g9FC+LaTp2Xj47QUtrPjzJmB+EQjYmF066mCzgz8i8o57y69jDu6bSwqjv5s5mWkRNT0YACCePeyiKgmOgkmGjmnplQyl3Zx7849B2AAABb0lEQVR4AWKgB2BkxC3HBKiFGhIcCKJonFTM6jj5Y0+s7o5t2879LzCx9vM2hY8HNod1/8c9/PD4AiQU8XmHPu6xKJZIZXKFUqBSazCh0uoUcr5eIj4WDUaT2WKxgunh8ekZwGqxmE0vhmPx9Q2EQuH7x+fX4zcBwh3g5/VY/LVtf8z2b8eX88m1KwK4bb+MI/QmIXi8Zp//MUDAFiRF0me5fNW2P/jg/3K+I0SHSByORC9eXrZFF+11xuJUIplK40yWey7m8iAEKbtQLJaIdNpepsh87hKDXAVAS0l35SkiJD1ql0p+nWmVpCh7Ku0ianVCynZpbzKWP6eeUg2yiVoxfZNWKW7i/TVmaNRGQtTpBj4Q5/c2/J5NiLYBAHwEsKDHuEPfaN2WtuVn1L+vDYa1ZAUyGVMliUeD29r4rdyYlHEZp8rlaXl2xzlNYRwuYzyfY2xf3G1lLPFqOFqvR8PlZpS7m2Ts8+Lxjtd/xR/6kTl1Vf45FgAAAABJRU5ErkJggg==',
  },
  {
    name: 'Modern School',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA+VBMVEVHcEwAAAAAAACIAADBNDfXiInclZfGWlzpubr04d/+///pwsL6/Pzs6ujt2cjqy7X08O7Xf4HkuI7bmFbgr3vVoWrdoGDpxqrekZLdhi7hqG3dk0nWjEHlwZ+UfGdPcooCaqGjhmgqhLYNdKqUtcurwdG+k2NzdHhJkbqIvdZUmL0ifa4gd6ffubkAAABmn8B5ss++wMncrKz2+Pjx8/RyqcbWycrRUUzTAQHVOBnWGxDRqqvUEhPjgw3jegzV1NlSAADXIxrXThGWKy6gk4btpgnrmgivbm/dbGXdag/ff265fn82hrTaXhLelpLffUnHoKEAAACsaWpcY+vIAAAAU3RSTlMAAgYiW4mcd+L///j//////6T////////A///////////////////////////7Dv///////////////+//////Mv//c////5T///+m/////+cbuoAp9psAAAJsSURBVHgBdZPVguowFEVL8EMKnUq4EyxUcKjjruP2/x9zi3R89mP3ao5zXxUJxP2ld+93KII4LhqLJxLxWJTj0A8EcSiZSsNJ6VQScZHvv8cyGIDP5nJZAQBnYuEjoX8lgCBKkqzIRCJ5DMLVZwJx/wDEaypTIhUKlIrFLMA/Dr0/wF0BloolUq6wQJUyEYsi4OCN0I8JIFG5ylSN6QbTVFYrFErAxy7lRlAGRCLW1Uaz1e502q1mQy2LhSzu9tD5gSQWruWyalpt3XYcW+9YplqlRddLosgJSIEsK5rfaPcHw9F4OOh3Gn5HoTl3gtARiKZxgVYavpYZjqez+XQ87DOrURcJXixPMWKQJgpravZ4tVrPZqPVamVoTUYkQdigY4Q45MWtamrOcDXdzWf76WroMFOt0ax3QJEASIA4L6u+eTNejW5Ho9vVanzX8NXqvOTdX4AS3bYtfzCe7nfr9W68Gt+0rPaW5i9AHDAYD83G3fRxt7t9fJyPp08PTXUBrhCEOCWJ8YL57e5w/vi4Xj/OpsNu22c89vhNWCYG1mrpz/t98MJuv7/zW60OuF5/iS6NwqC3fdUeDU8aGKrfNoIILz10aXXwhGYGH58GjjN4CmCzA1gIIkTCYeF8kZmWagL2wH+wTFbMud7kFX2Mm9Iae7Bsb7HwFtYDq8mStzg9EC4MiITW2UJvP5j9Tp0QReDfeujTymHIFqhUrlcq9SqhRdF798Ol5bGbJwohVApWl3cXgR/5uvZdz3X5XL6Uy3oeP9mEfiiEesnJQvAC8f2XzWvof34EoeXmcH9/2Cx7KLS/IaF+tf86//+5jFudMkVHqAAAAABJRU5ErkJggg==',
  },
  {
    name: 'Shiv Nadar School',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABlVBMVEVHcEwAITsBcsgCadCSvJi62EwAS5kASpsATJhPoN682VO21U3D31rC32CGrl8ARJYAR5cAS5UASo5Lo80ZnvE8m9VFo9jF21SnxiumxSqnxTGVuTcASpMATJYAcb4AidwAh9j0+c++2GufuyaavSSbuismX30AbbYAhdQAhtcYitfr/v+cuSqVtyaUtCiKqykqXn8Aa7EAgssAhtAAgc6pyFOOryoAUpwAecCgvjGRtTUUW5UAZ7AAf9O31FCxzTmYujV6qGkAe8lhn9zh5uK9226lxTakwUwAiNqcz9eBsOXD1zWuyjI8cnYAcMBhsuad08+RwtiRw+vD2mmxviulvyWHtS+nzDZOenwAjueDvOSCvOl7vu92vO97uu9yuO1np5aJskVRgXdXnrGWuWqny2C72Wm62mG922V9vOpps+lRptRLntaWxDQieq2vxkWwylO20Vu51WDA2WPE3Wl2uu1Xqt8XZ5CvyVy92GPB22d0ve92vO58tU3B22RutN58v+5xqseLuHB7v92Qw76iw1MAAACk7UH3AAAAh3RSTlMAAxsvAgcQW5wIHj9ZIx2s/fNHI0RSO0iXx7eK4P+CkbsHEHfd/+jZ2/9sDe///v///v/9jyn/////////R6XX////m05o/v/t0Vel6f//6pkOIp/k//////8sSnyavur//////+a1l3xl/v/////////t5777/////vKj2f/VQYLj3YBvOgYDZ3F+AAABfElEQVR4AcTNtYJTQRiG4fdLjp+su7v7boNdApaUXBk99LS4Q4O7u/taXAYGvQSeZuZ3/jMlksmEwz8JLMdxAdeyiVBYCFvzJJNQMZBqydUmSdW1is0DqE42rTphPvdKmGzfsz+Tw7IJEh/rwMT2n9Cd3zf1vhBAGIWDG6DoB6J7/C6amWoRFGAGoRvPEMPvojP8MtHaihX186vwefuMY4v0ZSfGsPA9bwNoNLnA6+qzRZiXX4fl4M2QBRj0vFfY4rOLKQ8w+BRNM7QDvn+kAol0OrM1CBp6YXDQq2uKiaFxsURzy3DaCaVY0osdl7EigCGllNGh49rXkBWxRP5pW8dH4gcruRhZN1aV6ch2kE0B2Wzdg6bctAqgAJX21xSmG5pV/FVtXt38XJoGAtw7R1QQpOf1tP8Vq7AsXtWBiN8nDpTKCJxdmvu4oX5ejuvMiLnX1qqDxpTL/PF9gcJi9fViwnx8pq3c3K28StDIhlGtQLKaAUiB6f8DllYBvAZpxlQBnWsAAAAASUVORK5CYII=',
  },
];

export default function TrustSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
  const slider = scrollRef.current;

  if (!slider) return;

  const interval = setInterval(() => {
    slider.scrollBy({
      left: 250,
      behavior: 'smooth',
    });

    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 100
    ) {
      slider.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <section
      id="partnerships"
      className="relative overflow-hidden! bg-[#191816] py-24!"
    >
      {/* Floral Left */}
     {/* Floral Left */}
<img
  src="/images/floral-left.svg"
  alt=""
  className="
    pointer-events-none
    absolute
    left-0
    top-0
    text-white
    w-[110px]
    md:w-[180px]
    lg:w-[220px]
    opacity-[0.09]
  "
/>

{/* Floral Right */}
<img
  src="/images/floral-right.svg"
  alt=""
  className="
    pointer-events-none
    absolute
    right-0
    top-0
    w-[110px]
    md:w-[180px]
    lg:w-[220px]
    opacity-[0.09]
  "
/>

      <div className="relative! z-10! mx-auto! max-w-[1500px]! px-8! lg:px-20!">
        {/* Intro */}
    

        {/* Label */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-14! text-center!"
        >
          <span className="tracking-[0.3em]! text-[12px]! uppercase! text-[#8b7355]! font-medium!">
            Trusted By Leading Institutions
          </span>
        </motion.div>

    <div className="relative mt-10!">
  {/* <div
    className="pointer-events-none! absolute! left-[60px]! top-0! z-20! h-full! w-24!"
    style={{
      background:
        'linear-gradient(to right,#f8f5f1 0%,rgba(248,245,241,0) 100%)',
    }}
  /> */}

  {/* <div
    className="pointer-events-none! absolute! right-[60px]! top-0! z-20! h-full! w-24!"
    style={{
      background:
        'linear-gradient(to left,#f8f5f1 0%,rgba(248,245,241,0) 100%)',
    }}
  /> */}

  <div className="flex!  items-center! gap-8!">
    {/* Left Arrow */}
    <button
      onClick={scrollLeft}
      className="
        z-30!
        flex! h-12! w-12!
        shrink-0!
        items-center!
        justify-center!
        rounded-full!
        border! border-[#ddd2c4]!
        bg-white!
        text-[#8b7355]!
        transition-all!
        duration-300!
        hover:border-[#bb8b57]!
        hover:shadow-md!
        hidden! md:block
      "
    >
      <ChevronLeft size={18} />
    </button>

    {/* Logos */}
    <div
      ref={scrollRef}
      className="
        flex-1!
        overflow-x-auto!
        scrollbar-hide!
        scroll-smooth!
      "
    >
      <div className="flex!  min-w-max! items-center!">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="flex! shrink-0! items-center!"
          >
            <div className="flex! items-center! gap-4! px-8!">
              <img
                src={partner.logo}
                alt={partner.name}
                className="
                  
                  object-contain!
                  opacity-90!
                "
              />

              <span
                className="
                  text-[15px]!
                  font-semibold!
                  uppercase!
                  leading-tight!
                  tracking-[0.05em]!
                  text-white
                  whitespace-nowrap!
                "
                style={{
                  fontFamily:
                    'var(--font-heading), Georgia, Times New Roman, serif',
                }}
              >
                {partner.name}
              </span>
            </div>

            {index !== partners.length - 1 && (
              <div className="h-12! w-px! bg-[#ddd2c4]!" />
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Right Arrow */}
    <button
      onClick={scrollRight}
      className="
        z-30!
        flex! h-12! w-12!
        shrink-0!
        items-center!
        justify-center!
        rounded-full!
        border! border-[#ddd2c4]!
        bg-white!
        text-[#8b7355]!
        transition-all!
        duration-300!
        hover:border-[#bb8b57]!
        hover:shadow-md!
        hidden! md:block
      "
    >
      <ChevronRight size={18} />
    </button>
  </div>
</div>
      </div>
    </section>
  );
}
