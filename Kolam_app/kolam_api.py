from fastapi import FastAPI, Query
from fastapi.responses import FileResponse
import uvicorn
import os
from kolammethod2 import DotGrid, RULEBOOKS, render_to_png

app = FastAPI()

@app.get("/generate_kolam")
def generate_kolam(
    rows: int = Query(9, ge=1, le=50),
    cols: int = Query(9, ge=1, le=50),
    rule: str = Query("sikku_like", enum=list(RULEBOOKS.keys())),
    show_dots: bool = Query(True)
):
    output_filename = f"kolam_{rows}x{cols}_{rule}.png"
    grid = DotGrid(rows, cols, spacing=1.0)
    P_arr = grid.points_array()
    flat_pts = grid.flat_points()
    paths = RULEBOOKS[rule](P_arr)
    render_to_png(paths, flat_pts, output_filename, show_dots=show_dots)
    return FileResponse(output_filename, media_type="image/png")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
