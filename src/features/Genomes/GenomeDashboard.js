// @flow
import React from "react"
import Grid from "material-ui/Grid"
import { Responsive, WidthProvider } from "react-grid-layout"
import MostUsedGenes from "features/Genomes/Tables/MostUsedGenes"
import GenesList from "features/Genomes/Tables/GenesList"
import ProteinsList from "features/Genomes/Tables/ProteinsList"
import GenomeCounts from "features/Genomes/Charts/GenomeCounts"
import data from "common/data/data"
import orange from "material-ui/colors/orange"

import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const ResponsiveReactGridLayout = WidthProvider(Responsive)

/**
 * This is the layout component for the Genomes dashboard.
 */

const GenomeDashboard = () => {
  return (
    <ResponsiveReactGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} lg={6} key="a">
          <MostUsedGenes data={data.tables.mostUsedGenes} color={orange[600]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <GenomeCounts data={data.charts.genomeCounts} color={orange[700]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <GenesList data={data.tables.genesList} color={orange[800]} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <ProteinsList data={data.tables.proteinsList} color={orange[400]} />
        </Grid>
      </Grid>
      {/* <div key="a">a</div> */}
      <div key="b">b</div>
      <div key="c">c</div>
    </ResponsiveReactGridLayout>
  )
}

export default GenomeDashboard
